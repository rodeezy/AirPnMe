import React from 'react';
import { Link } from 'react-router';
import ReviewShow from './review_show.jsx';

const reviewList = (reviews = []) => (
  reviews.map(review => (
    <ReviewShow rating={review.rating} body={review.body} key={review.id} />
  ))
);

const SpotDetail = ({ spot }) => {
  return (
    <div>
      <ul className="spot-list">
        <img className="index-image" src={spot.picture_url}/>
        <li>Rating: {spot.average_rating || "No reviews yet"}</li>
        <li>{spot.description}</li>
        <li>Seats: {spot.seating}</li>
        <li>Latitude: {spot.lat}</li>
        <li>Longitude: {spot.lng}</li>
      </ul>
      <br/>
      <div className="reviews">
        <h3>Reviews</h3>
        {reviewList(spot.reviews)}
      </div>
    </div>
  );
}

export default SpotDetail;
