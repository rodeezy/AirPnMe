# AirPnMe

[heroku link]: https://airpnme.herokuapp.com/#

AirPnMe is a platform to connect you to available restrooms in your area. It is a web application, inspired by AirBnB, and built using Ruby on Rails on the backend, a PostgresSQL database, and React/Redux framework on the frontend.

## Features and Implementation

### Restrooms as Spots

On the backend, spots are stored in the database with columns for id, owner_id, location, latitude, longitude, price, image_url, about_this, guest_limit, and desks.

Spots are rendered at / in the Spot component. Here they show their image, and location and are a link to the SpotDetails component.

In the SpotDetails component, spots are rendered listing all information about the spot, including reviews.

Spots are also rendered at /search which makes an API call to fetch spots filtered by availability, price, and location.

### Spot Search with Google Maps

There are two active search bars, one at / and another at /search that allow for location, date entry as well as number of guests. When the search form is submitted on the home page, users are redirected to the search page where their filtered results are available.

At /search, a google map is rendered with markers for each spot whose coordinates lie within the bounds of the map. The map actively filters the rendered spots as the map is moved or zoomed.

### Bookings

Users can book spot by making bookings which are stored in the database. Bookings have columns for user_id, spot_id, start_date, and end_date. Bookings are restricted by their availability based on spot and dates booked.

Bookings are rendered at /:id/bookings, filtered for the logged in user who can view and cancel their bookings.

### Reviews

Logged in users can leave reviews for spots. Review ratings are input and viewed as stars on the SpotDetails page. Reviews are stored in the database with a user_id, spot_id, and a body.

Reviews are rendered in the SpotDetails component, filtered for that spot.

## Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project. The next steps for AirPnMe are outlined below.

### Infinite Scroll

Add infinite scroll for bookings, and reviews.

### Direct Messaging

Allow users to send direct messages to the owner of each spot and ask questions.
