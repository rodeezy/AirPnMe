import React from 'react';
import { Link } from 'react-router';
import ReviewShow from './review_show.jsx';
import ReactStars from 'react-stars';

const reviewList = (reviews = []) => (
  reviews.map(review => (
    <ReviewShow author={review.author} rating={review.rating} body={review.body} key={review.id} />
  ))
);

const SpotDetail = ({ spot }) => {
  const starRating = <ReactStars value={spot.average_rating} edit={false} />;
  return (
    <div>
      <ul className="spot-list">
        <li><h3>{spot.description}</h3></li>
        <li>Rating: {spot.average_rating? starRating : "No reviews yet"}</li>
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
