import React from 'react';
import ReactStars from 'react-stars';

const Review = ({ author, rating, body }) => (
  <div>
    <ul>
      <li>Rating:
        <ReactStars value={rating} edit={false} />
        </li>
      <li>{ body }</li>
      <li>by {author}</li>
    </ul>
  </div>
);

export default Review;
