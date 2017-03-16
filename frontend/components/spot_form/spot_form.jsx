import React from 'react';
import { withRouter } from 'react-router';

class SpotForm extends React.Component{
  constructor(props) {
    super(props);
    this.coords = {lat: props.lat, lng: props.lng};
    this.state = {
      description: "",
      image_url: "",
      price: 2
    };
    this.owner_id = {
      owner_id: currentUser.id
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToSearch = this.navigateToSearch.bind(this);
    this.handleCloudinary = this.handleCloudinary.bind(this);
  }

  navigateToSearch() {
    this.props.router.push("/");
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  handleCloudinary(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, (error, results) => {
      if(error)
        console.log(error);
      else
        this.setState({ image_url: results[0].secure_url });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const spot = Object.assign({}, this.state, this.coords, this.owner_id);
    console.log({spot});
    this.props.createSpot({ spot });
    //console.log({spot}.errors.full_messages);
    this.navigateToSearch();
  }

  render() {
    const { description, image_url, price } = this.state;
    const { lat, lng } = this.coords;

    return (
        <div className="new-spot-container">
          <div className="new-spot-form">
            <h3 className="new-spot-title">Create A Spot!</h3>

            <form onSubmit={this.handleSubmit}>
              <label className="spot-field">Description</label>
              <input type="text" value={description}
                onChange={this.update("description")} className="spot-field"/>

              <label className="spot-field">Price</label>
              <input min='0' type="number" value={price}
                onChange={this.update("price")} className="spot-field"/>

              <label className="spot-field">Latitude</label>
              <input type="text" disabled value={lat} className="spot-field"/>

              <label className="spot-field">Longitude</label>
              <input type="text" disabled value={lng} className="spot-field"/>

              <div className="button-holder">
                <button
                  onClick={this.handleCloudinary}
                  className="new-spot-button" >
                  Add image
                </button>
              </div>

              <hr />

              <div className="button-holder">
                <input type="submit" value="Create Spot" className="new-spot-button"/>
              </div>
            </form>

            <div className="button-holder">
              <button
                className="new-spot-button"
                onClick={this.navigateToSearch}>
                Cancel
              </button>
            </div>
          </div>
        </div>
    );
  }
}

export default withRouter(SpotForm);
