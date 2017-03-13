## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
  - FeaturedSpotsContainer
    - FeaturedSpots
      - FeaturedSpotDetail
  - SearchBar

**SearchContainer**
 - Search
  * Search Header
  * SearchResults
  * MapContainer
    - Map

**SpotContainer**
 - Spot
  * SpotDetails
  * Reviews
  * BookingFormContainer
    - BookingForm

**BookingsContainer**
 - Bookings
  * BookingDetail


## Routes

|Path   | Component   |
|-------|-------------|
| "/home" | "HomeContainer" |
| "/search" | "SearchContainer" |
| "/spots/:spotId" | "SpotContainer" |
| "/bookings" | "BookingsContainer" |
