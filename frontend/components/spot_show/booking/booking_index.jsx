import React from 'react';
import BookingIndexItem from './booking_index_item';

const BookingIndex = ({ bookings }) => (
  <div className='booking-results'>
      {bookings.map(booking => (
        <BookingIndexItem booking={booking} key={booking.id} />
      ))}
  </div>
);

export default BookingIndex;
