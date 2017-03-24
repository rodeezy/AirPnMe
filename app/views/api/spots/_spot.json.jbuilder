json.extract! spot, :id, :description, :lat, :lng, :price,
  :image_url, :average_rating

json.bookings do
  json.partial! 'api/bookings/booking', collection: spot.bookings, as: :booking
end
