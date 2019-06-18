class BreweriesController < ApplicationController
  def index
    @breweries = Brewery.all
    puts ENV['MAP_KEY']
    render json: { breweries: @breweries, google_map: ENV['MAP_KEY'] }
  end
end
