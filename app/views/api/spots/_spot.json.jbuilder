json.extract! bench, :id, :description, :lat, :lng, :price,
  :image_url, :average_rating

json.reviews do
  json.partial! 'api/reviews/review', collection: spot.reviews, as: :review
end
