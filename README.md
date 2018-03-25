## Description
***SweetBikeRides is a place to share your favorite cycling routes including an interactive map of the route***
- any visitor to SweetBikeRides can see all the Cycling Routes that have been reviewed by member Users
- Users can sign in and become Members; they can add a Route Review that includes all the information for other cyclists to comment on: terrain, weather at time of ride, points of interest, photos and video
- Users who are members can add as many Route Reviews as they wish
- The app uses the MapboxAPI , Mapbox GL, along with mapbox Directions API with WebGL <a href="https://www.mapbox.com/api-documentation/#directions">Mapbox API docs</a>
## Technologies
* Backend: Rails 5.1.5
* Frontend: React.js
* Database: PostgreSQL
* User Auth: Devise
* Styling: CSS3 & Foundation
* Testing: RSpec, Capybara, Jasmine, Karma, Enzyme

## To run locally
* Install Ruby.2.3.3
* In a terminal, run git clone `https://github.com/cassking/sweetbikerides.git`
* Navigate to the project's root directory with `cd sweetbikerides`
* Run `bundle install && yarn install && npm install && rake db:migrate`
* In a separate terminal windows, run `npm start` && `rails server -- or-- rails s`
* Visit http://localhost:3000/ in your browser.
