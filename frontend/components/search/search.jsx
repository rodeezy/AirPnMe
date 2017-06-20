import React from 'react';

import FilterForm from './filter_form';
import SpotIndex from './spot_index';
import SpotMap from './../spot_map/spot_map';

const Search = ({ spots, minPrice, maxPrice, updateFilter, amenities, pageNumber }) => {

  function handleClick(event) {
    updateFilter("pageNumber", pageNumber + parseInt(event.target.value))
  }

  function showHidePrev() {
    return pageNumber === 0 ? <div/> :
      <button onClick={handleClick} value={-1}>Previous</button>
  }

  function showHideNext() {
    return (pageNumber + 1) * 18 > spots.length ? <div/> :
      <button onClick={handleClick} value={1}>Next</button>
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
      { showHidePrev() }
      { showHideNext() }
    </div>
  );
}

export default Search;
/*
<button onClick={handleClick} value={-1}>Previous</button>
<button onClick={handleClick} value={1}>Next</button>*/
