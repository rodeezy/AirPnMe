import {combineReducers} from 'redux';

// import SpotsReducer from './spots_reducer';
// import FiltersReducer from './filters_reducer';
import SessionReducer from './session_reducer';

const RootReducer = combineReducers({
  // benches: BenchesReducer,
  // filters: FiltersReducer,
  session: SessionReducer
});

export default RootReducer;
