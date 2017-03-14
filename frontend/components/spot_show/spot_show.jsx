import React from 'react';
import { Link } from 'react-router';

import SpotDetail from './spot_detail';
import SpotMap from '../spot_map/spot_map';
import ReviewButton from './review_button';

const SpotShow = ({ spot, spotId, fetchSpot, children }) => {
  const spots = {
    [spotId]: spot
  };

  return(
    <div className="single-spot-show">
      <div className="single-spot-map">
        <Link to="/">Back to Spots Index</Link>
        <SpotMap
          spots={spots}
          spotId={spotId}
          singleSpot={true}
          fetchSpot={fetchSpot}
          />
      </div>
      <div className="right-half spot-details">
        <SpotDetail spot={spot} />
        {children || <ReviewButton spotId={spotId} />}
      </div>
    </div>
  );
};

export default SpotShow;
