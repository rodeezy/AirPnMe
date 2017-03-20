import React from 'react';
import SpotIndexItem from './spot_index_item';

const SpotIndex = ({ spots }) => (
  <div className='spot-results'>
    <div className='left-half-results'>
      {spots.slice(0,spots.length/2).map(spot => (
        <SpotIndexItem spot={spot} key={spot.id} />
      ))}
    </div>
    <div className='right-half-results'>
      {spots.slice(spots.length/2).map(spot => (
        <SpotIndexItem spot={spot} key={spot.id} />
      ))}
    </div>
  </div>
);

export default SpotIndex;
