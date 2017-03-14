import React from 'react';
import SpotIndexItem from './spot_index_item';

const SpotIndex = ({ spots }) => (
  <div>
    <h1>Spotes: </h1>
    {spots.map(spot => (
      <SpotIndexItem spot={spot} key={spot.id} />
    ))}
  </div>
);

export default SpotIndex;
