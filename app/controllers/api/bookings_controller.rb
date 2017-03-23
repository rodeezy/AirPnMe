class Api::BookingsController < ApplicationController
  before_action :require_logged_in

  def create
    @booking = Booking.new(booking_params)

    if @booking.save
      render :show
    else
      render json: @booking, status: :unprocessable_entity
    end
  end

  def index
    @bookings = Booking.all.where(author_id: current_user.id)
    render :show
  end

  def destroy
    @booking = Booking.find(params[:id])
    render :json => @booking.destroy
  end

  private

  def booking_params
    params.require(:booking).permit(:start_time, :end_time, :spot_id, :author_id)
  end
end
