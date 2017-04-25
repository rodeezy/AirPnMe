import { connect } from 'react-redux';

import { updateFilter } from '../../actions/filter_actions';
import { asArray } from '../../reducers/selectors';

import Search from './search';

const mapStateToProps = state => ({
  spots: asArray(state),
  minPrice: state.filters.minPrice,
  maxPrice: state.filters.maxPrice,
  amenities: state.filters.amenities,
  availableDates: state.filters.availableDates
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
