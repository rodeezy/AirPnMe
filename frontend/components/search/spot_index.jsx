import React from 'react';
import SpotIndexItem from './spot_index_item';

const SpotIndex = ({ spots }) => {
  // let i = 0;
  //
  const componentDidMount = () => {
    console.log('shalom');
  }
  //
  // const next = () => {
  //   console.log(i);
  //   i++;
  // }
  return (
    <div className="spot-results-container">
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
    </div>
  );
}

export default SpotIndex;

// <br />
// <button onClick={previous}>Previous</button>
// <button onClick={next}>Next</button>
