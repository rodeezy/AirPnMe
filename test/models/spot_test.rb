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
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class SpotTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
