import {combineReducers} from 'redux';

import SpotsReducer from './spots_reducer';
import FiltersReducer from './filters_reducer';
import SessionReducer from './session_reducer';
//import ErrorsReducer from './error_reducer';

const RootReducer = combineReducers({
  spots: SpotsReducer,
  filters: FiltersReducer,
  session: SessionReducer
  //errors: ErrorsReducer
});

export default RootReducer;
