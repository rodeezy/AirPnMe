import * as APIUtil from '../util/spot_api_util'

export const RECEIVE_SPOTS = "RECEIVE_SPOTS";
export const RECEIVE_SPOT = "RECEIVE_SPOT";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";

export const createReview = review => dispatch => (
  APIUtil.createReview(review)
    .then(review => dispatch(receiveReview(review)))
);

export const fetchSpots = filters => dispatch => (
  APIUtil.fetchSpots(filters)
    .then(spots => dispatch(receiveSpots(spots)))
);

export const fetchSpot = id => dispatch => (
  APIUtil.fetchSpot(id)
    .then(spot => dispatch(receiveSpot(spot)))
);

export const createSpot = spot => dispatch => (
  APIUtil.createSpot(spot)
    .then(spot => dispatch(receiveSpot(spot)))
);

export const receiveSpots = spots => ({
  type: RECEIVE_SPOTS,
  spots
});

export const receiveSpot = spot => ({
  type: RECEIVE_SPOT,
  spot
});

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});
