import React from 'react';

import FilterForm from './filter_form';
import SpotIndex from './bench_index';
import SpotMap from './../bench_map/bench_map';

const Search = ({ spots, minPrice, maxPrice, updateFilter }) => (
  <div className="user-pane">
    <div className="left-half">
      <h5>Click Map to Add Spot!</h5>
      <SpotMap
        spots={spots}
        updateFilter={updateFilter}
        singleSpot={false} />
    </div>
    <div className="right-half">
      <FilterForm
        minPrice={minPrice}
        maxPrice={maxPrice}
        updateFilter={updateFilter} />
      <SpotIndex spots={spots} />
    </div>
  </div>
);

export default Search;
