class BreweriesController < ApplicationController
  def index
    @breweries = Brewery.all

    render json: { breweries: @breweries, google_map: ENV['MAP_KEY'] }
  end
end
