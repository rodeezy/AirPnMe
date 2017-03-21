import React from 'react';

import FilterForm from './filter_form';
import SpotIndex from './spot_index';
import SpotMap from './../spot_map/spot_map';

const Search = ({ spots, minPrice, maxPrice, updateFilter }) => (
  <div className="user-pane">
    <div className="left-half">
      <FilterForm
        minPrice={minPrice}
        maxPrice={maxPrice}
        updateFilter={updateFilter} />
      <SpotIndex spots={spots} />
    </div>
    <div className="right-half">
      <SpotMap
        spots={spots}
        updateFilter={updateFilter}
        singleSpot={false} />
    </div>
  </div>
);

export default Search;
