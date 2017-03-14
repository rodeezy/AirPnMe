json.extract! user, :id, :fname
json.bookings user.bookings.pluck(:id)
