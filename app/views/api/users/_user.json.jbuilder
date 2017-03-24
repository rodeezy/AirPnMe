json.extract! user, :id, :fname
json.bookings user.bookings.each do |booking|
  json.extract! booking, :id, :start_time, :end_time
  json.spot booking.spot
end
