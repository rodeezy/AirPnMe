import React from 'react';
// import StarRating from 'react-star-rating';
import ReactStars from 'react-stars';
import { withRouter } from 'react-router';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { author_id: this.props.currentUser.id, rating: 5, body: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToSpotShow = this.navigateToSpotShow.bind(this);
  }

  navigateToSpotShow() {
    this.props.router.push(`/spots/${this.props.params.spotId}`);
  }

  handleSubmit(e) {
    e.preventDefault();
    const spotId = parseInt(this.props.params.spotId);
    const review = Object.assign({}, this.state, {
      spot_id: spotId
    });
    this.props.createReview({review});
    this.navigateToSpotShow();
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  updateRating() {
    return new_rating => this.setState({rating: new_rating})
  }

  render() {
    return (
      <div className="review-form">
        <form onSubmit={ this.handleSubmit }>
          <label>Rating</label>
          <br/>
          <ReactStars value={ this.state.rating }
          onChange={ this.updateRating() } count={5} size={24} color2={'#ffd700'} />
          <br/>

          <label>Comment</label>
          <br/>
          <textarea
            cols='40'
            rows='10'
            value={ this.state.body }
            onChange={ this.update("body") }></textarea>
          <br/>
          <input className='guest-login' style={{'marginRight': '40px'}} type="submit"/>
          <button className='lower-login-btn'
            style={{'float': 'none', 'height': '30px', 'width': '100px'}}
             onClick={ this.navigateToSpotShow }>Cancel</button>
        </form>
      </div>
    );
 }
}

export default withRouter(ReviewForm);
