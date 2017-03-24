import React from 'react';

const Review = ({ author, rating, body }) => (
  <div>
    <ul>
      <li>Rating: { rating }</li>
      <li>{ body }</li>
      <li>by {author}</li>
    </ul>
  </div>
);

export default Review;
