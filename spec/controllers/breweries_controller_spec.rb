require 'rails_helper'

RSpec.describe BreweriesController, type: :controller do
  describe "GET breweries" do
    it "returns json" do
      brewery_1 = Brewery.create(name: "Dogfish Head", brewery_type: "Awesome" )
      brewery_2 = Brewery.create(name: "21st Amendment", brewery_type: "Also Awesome")
      get :index
      expect(response.content_type).to eq("application/json")
    end
  end
end
