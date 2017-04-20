class Api::SpotsController < ApplicationController
  # before_action :require_logged_in, only: [:create]
  def index
    spots = bounds ? Spot.in_bounds(bounds) : Spot.all

    if (params[:minPrice] && params[:maxPrice])
      spots = spots.where(price: price_range)
    end
    @spots = spots.includes(:reviews, :bookings)
    render :index
  end

  def show
    @spot = Spot.find(params[:id])
    if @spot
      render :show
    else
      render json: @spot.errors.full_messages, status: 422
    end
  end

  def create
    @spot = Spot.new(spot_params)
    if @spot.save
      render :show
    else
      render json: @spot.errors.full_messages, status: 422
    end
  end

  private

  def price_range
    (params[:minPrice]..params[:maxPrice])
  end

  def spot_params
    params.require(:spot).permit(
      :lat,
      :lng,
      :description,
      :price,
      :image_url,
      :owner_id
    )
  end

  def bounds
    params[:bounds]
  end
end
