# == Schema Information
#
# Table name: bookings
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  spot_id    :integer          not null
#  start_time :datetime         not null
#  end_time   :datetime         not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Booking < ApplicationRecord
  validates :author_id, uniqueness: { scope: :spot_id }

  belongs_to :spot
  belongs_to :author, class_name: :User
end
