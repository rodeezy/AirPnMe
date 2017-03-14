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
  end

  def create
    @spot = Spot.create!(spot_params)
    render :show
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
      :image_url
    )
  end

  def bounds
    params[:bounds]
  end
end
