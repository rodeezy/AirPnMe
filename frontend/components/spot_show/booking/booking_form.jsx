import React from 'react';
import { withRouter } from 'react-router';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { author_id: this.props.currentUser.id, start_time: new Date(Date.now()), end_time: new Date(Date.now()+6e3) };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToSpotShow = this.navigateToSpotShow.bind(this);
  }

  //prob unnecessary redirect maybe
  navigateToSpotShow() {
    this.props.router.push(`/spots/${this.props.params.spotId}`);
  }

  handleSubmit(e) {
    e.preventDefault();
    const spotId = parseInt(this.props.params.spotId);
    const booking = Object.assign({}, this.state, {
      spot_id: spotId
    });
    this.props.createBooking({booking});
    this.navigateToSpotShow();
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  render() {
    return (
      <div className="booking-form">
        <form onSubmit={ this.handleSubmit }>
          <label>Start Time</label>
          <br/>
          <input type="date"
            value={ this.state.start_time }
            onChange={ this.update("start_time") }/>
          <br/>

          <label>End Time</label>
          <br/>
          <input type="date"
            value={ this.state.end_time }
            onChange={ this.update("end_time") }/>
          <br/>
          <input type="submit"/>
        </form>
        <button onClick={ this.navigateToSpotShow }>Cancel</button>
      </div>
    );
 }
}

export default withRouter(BookingForm);
