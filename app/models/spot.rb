# == Schema Information
#
# Table name: spots
#
#  id          :integer          not null, primary key
#  owner_id    :integer          not null
#  lat         :float            not null
#  lng         :float            not null
#  price       :integer          not null
#  image_url   :string           not null
#  description :string           not null
#  created_at  :date         not null
#  updated_at  :date         not null
#

class Spot < ApplicationRecord
  validates :owner_id, :price, :image_url, :description, :lat,
    :lng, presence: true

  has_many :reviews
  has_many :bookings
  belongs_to :owner, class_name: :User
  # has_many :favorite_users,
  #   through: :favorites,
  #   source: :user

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
  end

  def average_rating
    reviews.average(:rating)
  end
end
