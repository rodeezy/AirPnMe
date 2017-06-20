import React from 'react';

import FilterForm from './filter_form';
import SpotIndex from './spot_index';
import SpotMap from './../spot_map/spot_map';

const Search = ({ spots, minPrice, maxPrice, updateFilter, amenities, pageNumber }) => {
  function handleClick(event) {
    console.log(`pagenumber ${pageNumber}`);
    console.log(`value ${event.target.value}`);
    updateFilter("pageNumber", pageNumber + parseInt(event.target.value))
  }
  return (
    <div className="search-wrapper">
      <div className="user-pane">
        <div className="left-half">
          <FilterForm
            minPrice={minPrice}
            maxPrice={maxPrice}
            updateFilter={updateFilter} />
          <SpotIndex spots={ spots.slice(pageNumber * 18, (pageNumber + 1) * 18) } />
        </div>
        <div className="right-half">
          <SpotMap
            spots={ spots.slice(pageNumber * 18, (pageNumber + 1) * 18) }
            updateFilter={updateFilter}
            singleSpot={false} />
        </div>
      </div>
      <br />
      <button onClick={handleClick} value={-1}>Previous</button>
      <button onClick={handleClick} value={1}>Next</button>
    </div>
  );
}

export default Search;
