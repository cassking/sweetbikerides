## Description
***SweetBikeRides is a place to share your favorite cycling routes including an interactive map of the route***
- any visitor to SweetBikeRides can see all the Cycling Routes that have been reviewed by member Users
- Users can sign in and become Members; they can add a Route Review that includes all the information for other cyclists to comment on: terrain, weather at time of ride, points of interest, photos and video
- Users who are members can add as many Route Reviews as they wish
- The app uses the MapboxAPI , Mapbox GL, along with mapbox Directions API with WebGL <a href="https://www.mapbox.com/api-documentation/#directions">Mapbox API docs</a>

## Demo
Try it out here: <a href="https://sweetbikerides.herokuapp.com/">SweetBikeRides!</a>

## Technologies
* Backend: Rails 5.1.5
* Webpacker
* Frontend: React.js
* Database: PostgreSQL
* User Auth: Devise
* Styling: CSS3 & Foundation
* Testing: RSpec, Capybara, Jasmine, Karma, Enzyme

## To run locally
* Install Ruby.2.3.3
* In a terminal, run git clone `https://github.com/cassking/sweetbikerides.git`
* Navigate to the project's root directory with `cd sweetbikerides`
* Run `bundle install && yarn install && npm install && rake db:create && rake db:migrate && rake db:seed`
* In a separate terminal windows, run `npm start` && `rails server -- or-- rails s`
* Visit http://localhost:3000/ in your browser.

[ ![Codeship Status for cassking/sweetbikerides](https://app.codeship.com/projects/ee140d20-131d-0136-a67e-068f11ae90dc/status?branch=master)](https://app.codeship.com/projects/283120)
[![Code Climate](https://codeclimate.com/github/cassking/sweetbikerides/badges/gpa.svg)](https://codeclimate.com/github/cassking/sweetbikerides)
[![Coverage Status](https://coveralls.io/repos/github/cassking/sweetbikerides/badge.svg?branch=master)](https://coveralls.io/github/cassking/sweetbikerides?branch=master)
