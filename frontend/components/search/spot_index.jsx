import React from 'react';
import SpotIndexItem from './spot_index_item';

const SpotIndex = ({ spots }) => {
  let page = 0;

  const componentDidMount = () => {
    // page = 0;
    console.log('ayy');
  }

  const next = () => {
    // console.log(i);

    console.log(page);
    page++;
    SpotIndex({spots});
  }

  const previous = () => {
      if (page > 0) {
        page--;
      }
  }

  return (
    <div className="spot-results-container">
      <div className='spot-results'>
        <div className='left-half-results'>
          {spots.slice(page*9,(page+1)*9).map(spot => (
            <SpotIndexItem spot={spot} key={spot.id} />
          ))}
        </div>
        <div className='right-half-results'>
          {spots.slice((page+1)*9,(page+2)*9).map(spot => (
            <SpotIndexItem spot={spot} key={spot.id} />
          ))}
        </div>
      </div>
      <br />
      <button onClick={previous}>Previous</button>
      <button onClick={next}>Next</button>
    </div>
  );
}

export default SpotIndex;

// spots.slice(0,spots.length/2)
// spots.slice(spots.length/2)
