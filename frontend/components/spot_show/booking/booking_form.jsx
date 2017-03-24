import React from 'react';
import { withRouter } from 'react-router';
import { DateRangePicker } from 'react-dates';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.spotId);
    this.state = { author_id: this.props.currentUser.id, start_time: new Date(Date.now()), end_time: new Date(Date.now()+1e3*3600*24) };

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

          <label>Start Date</label>
          <br/>
          <input type="date"
            value={ this.state.start_time }
            onChange={ this.update("start_time") }/>
          <br/>

          <label>End Date</label>
          <br/>
          <input type="date"
            value={ this.state.end_time }
            onChange={ this.update("end_time") }/>
          <br/>
          <input id='booking-submit' className='guest-login' type="submit"/>
        </form>
      </div>
    );
 }
}

export default withRouter(BookingForm);
