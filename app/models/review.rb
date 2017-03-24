 # == Schema Information
#
# Table name: reviews
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  spot_id    :integer          not null
#  rating     :integer          not null
#  body       :string           not null
#  created_at :date         not null
#  updated_at :date         not null
#

class Review < ApplicationRecord
  validates :rating, inclusion: { in: (1..5) }
  validates :spot_id, :author_id, :body, presence: true
  belongs_to :spot
  belongs_to :author, class_name: :User
end
