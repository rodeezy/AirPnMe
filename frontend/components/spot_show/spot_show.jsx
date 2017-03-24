import React from 'react';
import { Link } from 'react-router';

import SpotDetail from './spot_detail';
import SpotMap from '../spot_map/spot_map';
import ReviewButton from './review_button';
import BookingForm from './booking/booking_form'
import BookingFormContainer from './booking/booking_form_container'

const SpotShow = ({ spot, spotId, fetchSpot, children }) => {
  const spots = {
    [spotId]: spot
  };

  return(
    <div className="single-spot-show">
        <img src={spot.image_url} />
        <div className="single-spot-map">
          <SpotMap
            spots={spots}
            spotId={spotId}
            singleSpot={true}
            fetchSpot={fetchSpot}
            />
      </div>
            <div className="right-half-spot-details">
              <BookingFormContainer spotId={spotId} />
            </div>
            <br />
        <div className="left-half-spot-details">
          <SpotDetail spot={spot} />
          {children || <ReviewButton spotId={spotId} />}
        </div>



    </div>
  );
};

export default SpotShow;
