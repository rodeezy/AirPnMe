import {
  RECEIVE_CURRENT_USER,
  LOGOUT,
  RECEIVE_ERRORS,
  CLEAR_ERRORS } from '../actions/session_actions';
import {RECEIVE_BOOKING} from '../actions/spot_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, _nullUser, {
        currentUser
      });
    case LOGOUT:
      return merge({}, _nullUser);
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _nullUser, {
        errors
      });
    case RECEIVE_BOOKING:
      const booking = action.booking;
      newState.currentUser.bookings.push(booking);
      return newState;
    case CLEAR_ERRORS:
      // debugger;
      newState.errors = [];
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
