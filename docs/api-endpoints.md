# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`


### Session

- `POST /api/session`
- `DELETE /api/session`

### Spots

- `GET /api/spots`
  - Spots index/search
  - accepts `price` and `start_time` query params to fetch available spots
- `GET /api/spots/:id`

### Bookings

- `GET /api/bookings`
- `POST /api/bookings`
- `GET /api/bookings/:id`
- `DELETE /api/bookings/:id` - cancel booking

### Reviews
- A spot's reviews will be included in the Spot show template
- `GET /api/reviews`
- `POST /api/reviews`
- `PATCH /api/reviews/:id`
- `DELETE /api/reviews/:id`
