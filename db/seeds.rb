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

u1 = User.create!(username: "ILoveBikes1",email: "u11@gmail.com", password: "pw1234",
  bio: "I am a category 3, have been racing and mountain biking for over 10 years. My wife and daughter also ride but cyclocross.",
location: "Watkins Glen, NY")
u2 = User.create!(username: "ILoveBikes2",email: "u22@gmail.com", password: "pw1234",
  bio: "I have been touring the US for 5 years. camping and hiking along the way, I travel wiht my 3 dogs, my wife and daughter also ride but cyclocross.",
  location: "Mt. Airy, PA")
admin1= User.create!(username: "admin1",email: "admin1@gmail.com", password: "pw1234", role: "admin")
u3 = User.create!(username: "ILoveBikes3",email: "u33@gmail.com", password: "pw1234",
  bio: "I own altogether 15 bikes, road, track, mtn, cyclocross, hybrids, love cycling",
  location: "Palmyra, PA")
u4 = User.create!(username: "ILoveBikes4",email: "u44@gmail.com", password: "pw1234",
  bio: "my dad got me into racing cyclocross, in my spare time i run my own restaurant",
  location: "Philly, PA")

rr1 = RouteReview.create!(user_id: u1.id, name: "Widow's Peak to Gravel Fountain", mileage: 68.7, coordinates: [],
description: "This is a wonderful route, full of long hard climbs and fun
descents. It ends at Gravel Fountain.traversed a portion of the course: a 15 mile climb to Bear Creek with nearly 5,000 feet of elevation gain – gorgeous, and grueling. But Tour de Fronds also offers alternate routes that aren’t as intense, with five options featuring pavement or gravel, hilly or flatter.", category: cat1.name, difficulty: "Rolling Hills",
points_interest: "Wawa, The Railroad Cafe, The Wiss Park Lake",
start_location: "North Philadelphia", end_location: "Center City by the Civic Park",
map_start_lng_lat:[-75.36427490730534,39.99565738881529],
map_end_lng_lat:[-75.17410435465882,39.9097239490477])
rr2 = RouteReview.create!(user_id:u2.id, name: "The Madonnas valley ride", mileage: 90.6, coordinates: [],
description: "This nice onehills and hills traversed a portion of the course: a 15 mile climb to Bear Creek with nearly 5,000 feet of elevation gain – gorgeous, and grueling. But Tour de Fronds also offers alternate routes that aren’t as intense, with five options featuring pavement or gravel, hilly or flatter.", category:  cat2.name, difficulty: "Very Hilly",
points_interest: "7-Eleven for food stops, The Hillside Cafe, Bike Stop bike shop",
start_location: "Wissahickon", end_location: "North Philly",
map_start_lng_lat:[-75.36427490730534,39.99565738881529],
map_end_lng_lat:[-75.17410435465882,39.9097239490477])
rr3 = RouteReview.create!(user_id: u3.id, name: "The  loopdaloop ride", mileage: 120.6, coordinates: [],
description: "This is fun interesting, good stops traversed a portion of the course: a 15 mile climb to Bear Creek with nearly 5,000 feet of elevation gain – gorgeous, and grueling. But Tour de Fronds also offers alternate routes that aren’t as intense, with five options featuring pavement or gravel, hilly or flatter.", category:  cat3.name, difficulty: "Rolling Hills",
points_interest: "Wawa, Whole Foods on way, The Petts coffee shop, Rendassy bike shop",
start_location: "Pennypack park", end_location: "Center City Philly",
map_start_lng_lat:[-75.36427490730534,39.99565738881529],
map_end_lng_lat:[-75.17410435465882,39.9097239490477])


rr4 = RouteReview.create!(user_id: u3.id, name: "Fountain ride", mileage: 40.6, coordinates: [],
  points_interest: "Wawa, 7-eleven on way, check out the entrance to Floral Gradens park",
description: "This is a hard grinder, 90 miles of gravel and hills traversed a portion of the course: a 15 mile climb to Bear Creek with nearly 5,000 feet of elevation gain – gorgeous, and grueling. But Tour de Fronds also offers alternate routes that aren’t as intense, with five options featuring pavement or gravel, hilly or flatter.", category:  cat4.name, difficulty: "Rolling Hills",
map_start_lng_lat:[-75.36427490730534,39.99565738881529],
map_end_lng_lat:[-75.17410435465882,39.9097239490477])
c1= Comment.create!(user_id:u1.id, route_review_id:rr4.id, body:"thanks for posting this, it was intense and fun")
c2= Comment.create!(user_id:u2.id, route_review_id:rr4.id, body:"this was a cool ride. thank you")
c3= Comment.create!(user_id:u3.id, route_review_id:rr4.id, body:"will be doing it next weekend!")

c4= Comment.create!(user_id:u1.id, route_review_id:rr1.id, body:"I will be riding this in two weeks")
c5= Comment.create!(user_id:u2.id, route_review_id:rr1.id, body:"great funeason. This splendid ride offers somewhat of a recap of the season. It traverses portions of many other rides, including Pioneer Century, Tour de Cure, Portland Century and CF: Cycle for Life as it snakes through Washington County into wine country and across the Canby Ferry.")
c6= Comment.create!(user_id:u3.id, route_review_id:rr1.id, body:"supereason. This splendid ride offers somewhat of a recap of the season. It traverses portions of many other rides, including Pioneer Century, Tour de Cure, Portland Century and CF: Cycle for Life as it snakes through Washington County into wine country and across the Canby Ferry. hard")


c7= Comment.create!(user_id:u4.id, route_review_id:rr2.id, body:"This splendid ride offers somewhat of a recap of the season. It traverses portions of many other rides, including Pioneer Century, Tour de Cure, Portland Century and CF: Cycle for Life as it snakes through Washington County into wine country and across the Canby Ferry. I will be riding this in two weeks")
c8= Comment.create!(user_id:u2.id, route_review_id:rr2.id, body:"This fun ride offers somewhat of a recap of the season. It traverses portions of many other rides, including Pioneer Century, Tour de Cure, Portland Century and CF: Cycle for Life as it snakes through Washington County into wine country and across the Canby Ferry.great fun")
c9= Comment.create!(user_id:u3.id, route_review_id:rr2.id, body:"super sweet")

c10= Comment.create!(user_id:u4.id, route_review_id:rr3.id, body:"I will be riding this in season. This splendid ride offers somewhat of a recap of the season. It traverses portions of many other rides, including Pioneer Century, Tour de Cure, Portland Century and CF: Cycle for Life as it snakes through Washington County into wine country and across the Canby Ferry.two weeks")
c11= Comment.create!(user_id:u2.id, route_review_id:rr3.id, body:"This hilly ride offers somewhat of a recap of the season. It traverses portions of many other rides, including Pioneer Century, Tour de Cure, Portland Century and CF: Cycle for Life as it snakes through Washington County into wine country and across the Canby Ferry.fun")
c12= Comment.create!(user_id:u3.id, route_review_id:rr3.id, body:"a splendid ride offers somewhat of a recap of the season. It traverses portions of many other rides, including Pioneer Century, Tour de Cure, Portland Century and CF: Cycle for Life as it snakes through Washington County into wine country and across the Canby Ferry.super fun")


rrc1= RouteReviewCategory.create!(category_id: cat1.id, route_review_id:rr1.id)
rrc2= RouteReviewCategory.create!(category_id: cat2.id, route_review_id:rr2.id)
rrc3= RouteReviewCategory.create!(category_id: cat3.id, route_review_id:rr3.id)
rrc4= RouteReviewCategory.create!(category_id: cat4.id, route_review_id:rr4.id)
