json.extract! spot, :id, :description, :lat, :lng, :price,
  :image_url, :average_rating

json.reviews do
  json.partial! 'api/reviews/review', collection: spot.reviews, as: :review
end

json.bookings do
  json.partial! 'api/bookings/booking', collection: spot.bookings, as: :booking
end
