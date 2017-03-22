import React from 'react';
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

  render() {
    return (
      <div className="review-form">
        <form onSubmit={ this.handleSubmit }>
          <label>Rating</label>
          <br/>
          <input type="number"
            value={ this.state.rating }
            onChange={ this.update("rating") }/>
          <br/>

          <label>Comment</label>
          <br/>
          <textarea
            cols='30'
            rows='10'
            value={ this.state.body }
            onChange={ this.update("body") }></textarea>
          <br/>
          <input type="submit"/>
        </form>
        <button onClick={ this.navigateToSpotShow }>Cancel</button>
      </div>
    );
 }
}

export default withRouter(ReviewForm);
