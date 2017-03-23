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
  #should scope for overlapping times, not spot uniqueness
  #F that ^^
  #Look at 99 cats! for author can't book spot while other author has it booked
  validates :spot_id, :author_id, :start_time, :end_time, presence: :true
  validate :start_must_come_before_end
  validate :does_not_overlap_booking
  validate :start_must_be_after_now

  belongs_to :spot
  belongs_to :author, class_name: :User

  def overlapping_bookings
    Booking
      .where.not(id: self.id)
      .where(spot_id: spot_id)
      .where(<<-SQL, start_time: start_time, end_time: end_time)
         NOT( (start_time > :end_time) OR (end_time < :start_time) )
      SQL
  end

  def does_not_overlap_booking
    unless overlapping_bookings.empty?
      errors[:base] <<
        "Booking conflicts with existing booking"
    end
  end

  def start_must_come_before_end
    return if start_time < end_time
    errors[:start_time] << "must come before end time"
    errors[:end_time] << "must come after start time"
  end

  def start_must_be_after_now
    return if start_time >= DateTime.now
    errors[:start_time] << "cannot be before now until
    our time travel patch release"
  end
end
