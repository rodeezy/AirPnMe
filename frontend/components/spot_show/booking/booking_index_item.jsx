import React from 'react';
import { withRouter } from 'react-router';
import SpotIndexItem from '../../search/spot_index_item';

class BookingIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // const bookingId = this.props.booking.id;
    // this.props.router.push(`bookings/${bookingId}`);
  }

  render() {
    const { start_time, end_time, spot } = this.props.booking;
    console.log(end_time);
    window.end_time = end_time;
    return (
      <div className="booking-index-item"
           onClick={this.handleClick}>
        <SpotIndexItem spot={spot} />
        <div className="booking-index-item-info">
          <span className="index-item-start-time">
            {new Date(start_time).toDateString()}
          </span>
           -> 
          <span className="index-item-end-time">
            {new Date(end_time).toDateString()}
          </span>
          <br />
        </div>
      </div>
    );
  }
}

export default withRouter(BookingIndexItem);
