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

require 'test_helper'

class BookingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
