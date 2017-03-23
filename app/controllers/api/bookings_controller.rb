class Api::BookingsController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def create
    @booking = Booking.new(booking_params)

    if @booking.save
      render :show
    else
      render json: @booking, status: :unprocessable_entity
    end
  end

  private

  def booking_params
    params.require(:booking).permit(:start_time, :end_time, :spot_id, :author_id)
  end
end
