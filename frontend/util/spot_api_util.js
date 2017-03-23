export const fetchSpots = (data) => {
  return $.ajax({
    method: 'GET',
    url: 'api/spots',
    data
  });
};

export const fetchSpot = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/spots/${id}`
  });
};

export const createReview = (data) => {
  return $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data
  });
};

export const createBooking = (data) => {
  return $.ajax({
    method: 'POST',
    url: 'api/bookings',
    data
  });
};

export const createSpot = (data) => {
  return $.ajax({
    method: 'POST',
    url: 'api/spots',
    data
  });
};
