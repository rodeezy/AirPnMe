import React from 'react';

import FilterForm from './filter_form';
import SpotIndex from './spot_index';
import SpotMap from './../spot_map/spot_map';

const Search = ({ spots, minPrice, maxPrice, updateFilter }) => (
  <div className="user-pane">
    <div className="right-half">
      <h5>Click Map to Add Spot!</h5>
      <SpotMap
        spots={spots}
        updateFilter={updateFilter}
        singleSpot={false} />
    </div>
    <FilterForm
      minPrice={minPrice}
      maxPrice={maxPrice}
      updateFilter={updateFilter} />
    <div className="left-half">
      <SpotIndex spots={spots} />
    </div>
  </div>
);

export default Search;
