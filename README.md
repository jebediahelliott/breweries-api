# Breweries of Harrisburg
Application for viewing the breweries of Harrisburg Pennsylvania

Ruby version: 2.6.1
Node version: 10.15.3
Database: PostgreSQL

### Development
This app was generated using Rails api only and create-react-app
To get things up and running
Fork and Clone and then run the following
```
bundle install
cd client
npm install
cd ..
rake db:create
rake db:migrate
rake db:seed
rake start
```
This will install dependencies and boot servers for the front and back end.
Tests for the backend can be run using `rspec`
Tests for the frontend can be run from the client directory
```
cd client
npm test
```
You will need to provide a Google API key. Create a `.env` file in the root directory and create variable called `MAP_KEY` to store the API credentials.
```
##breweries-api/.env
MAP_KEY=<your secret key>
```
