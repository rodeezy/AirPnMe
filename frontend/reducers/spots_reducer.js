import { CREATE_REVIEW,
  RECEIVE_REVIEW,
  RECEIVE_SPOTS,
  RECEIVE_SPOT } from '../actions/spot_actions';
import merge from 'lodash/merge';

const SpotsReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_SPOTS:
      return action.spots;
    case RECEIVE_SPOT:
      const newSpot = {[action.spot.id]: action.spot};
      return merge({}, state, newSpot);
    case RECEIVE_REVIEW:
      const review = action.review;
      newState[review.spot_id].reviews.push(review)
      return newState;
    default:
      return state;
  }
};

export default SpotsReducer;
