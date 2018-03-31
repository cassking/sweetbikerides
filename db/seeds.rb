# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).


RouteReview.destroy_all
User.destroy_all
Comment.destroy_all
Category.destroy_all
RouteReviewCategory.destroy_all

cat1 =Category.create!(name:"Gravel", description: "Hard Packed Dirt and stones with some mud")
cat2 =Category.create!(name:"Asphalt", description: "Smooth pavement")
cat3 =Category.create!(name:"Grass", description: "Grassy")
cat4 =Category.create!(name:"Mixed/Asphalt/Gravel/Grass", description: "Mixed terrain, expect anything")

u1 = User.create!(username: "user1",email: "u11@gmail.com", password: "pw1234")
u2 = User.create!(username: "user2",email: "u22@gmail.com", password: "pw1234")
admin1= User.create!(username: "admin1",email: "admin1@gmail.com", password: "pw1234", role: "admin")
u3 = User.create!(username: "user3",email: "u33@gmail.com", password: "pw1234")
u4 = User.create!(username: "user4",email: "u44@gmail.com", password: "pw1234")

rr1 = RouteReview.create!(user_id: u1.id, name: "Widow's Peak to Gravel Fountain", mileage: 68.7, coordinates: [],
description: "This is a wonderful route, full of long hard climbs and fun
descents. It ends at Gravel Fountain", category: cat1.name, difficulty: "Rolling Hills",
points_interest: "Wawa, The Railroad Cafe, The Wiss Park Lake",
start_location: "North Philadelphia", end_location: "Center City by the Civic Park",
map_start_latitude: -99.865722, map_start_longitude:39.00211, map_end_latitude:-99.684448, map_end_longitude:  38.972221)

rr2 = RouteReview.create!(user_id:u2.id, name: "The Madonnas valley ride", mileage: 90.6, coordinates: [],
description: "This nice onehills and hills", category:  cat2.name, difficulty: "Very Hilly",
points_interest: "7-Eleven for food stops, The Hillside Cafe, Bike Stop bike shop",
start_location: "Wissahickon", end_location: "North Philly",

map_start_latitude: -101.744384, map_start_longitude:39.32155, map_end_latitude:-101.552124, map_end_longitude: 39.330048)

rr3 = RouteReview.create!(user_id: u3.id, name: "The  loopdaloop ride", mileage: 120.6, coordinates: [],
  start_location: "Valley Forge", end_location: "West Philly",

description: "This is fun interesting, good stops", category:  cat3.name, difficulty: "Rolling Hills",
points_interest: "Wawa, Whole Foods on way, The Petts coffee shop, Rendassy bike shop",
start_location: "Pennypack park", end_location: "Center City Philly",


map_start_latitude: -101.744384, map_start_longitude:39.32155, map_end_latitude:-101.552124, map_end_longitude: 39.330048)


rr4 = RouteReview.create!(user_id: u3.id, name: "Fountain ride", mileage: 40.6, coordinates: [],
  points_interest: "Wawa, 7-eleven on way, check out the entrance to Floral Gradens park",
description: "This is a hard grinder, 90 miles of gravel and hills", category:  cat4.name, difficulty: "Rolling Hills",
map_start_latitude: -101.744384, map_start_longitude:39.32155, map_end_latitude:-101.552124, map_end_longitude: 39.330048)

c1= Comment.create!(user_id:u1.id, route_review_id:rr4.id, body:"thanks for posting this, it was intese and fun")
c2= Comment.create!(user_id:u2.id, route_review_id:rr4.id, body:"this was a cool ride. thank you")
c3= Comment.create!(user_id:u3.id, route_review_id:rr4.id, body:"will be doing it next weekend!")

c4= Comment.create!(user_id:u1.id, route_review_id:rr1.id, body:"I will be riding this in two weeks")
c5= Comment.create!(user_id:u2.id, route_review_id:rr1.id, body:"great fun")
c6= Comment.create!(user_id:u3.id, route_review_id:rr1.id, body:"super hard")


c7= Comment.create!(user_id:u4.id, route_review_id:rr2.id, body:"I will be riding this in two weeks")
c8= Comment.create!(user_id:u2.id, route_review_id:rr2.id, body:"great fun")
c9= Comment.create!(user_id:u3.id, route_review_id:rr2.id, body:"super sweet")

c10= Comment.create!(user_id:u4.id, route_review_id:rr3.id, body:"I will be riding this in two weeks")
c11= Comment.create!(user_id:u2.id, route_review_id:rr3.id, body:"great fun")
c12= Comment.create!(user_id:u3.id, route_review_id:rr3.id, body:"super fun")


rrc1= RouteReviewCategory.create!(category_id: cat1.id, route_review_id:rr1.id)
rrc2= RouteReviewCategory.create!(category_id: cat2.id, route_review_id:rr2.id)
rrc3= RouteReviewCategory.create!(category_id: cat3.id, route_review_id:rr3.id)
rrc4= RouteReviewCategory.create!(category_id: cat4.id, route_review_id:rr4.id)
