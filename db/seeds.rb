# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

RouteReview.destroy_all
User.destroy_all
Comment.destroy_all
Category.destroy_all
RouteReviewCategory.destroy_all

cat1 =Category.create!(name:"Gravel", description: "Hard Packed Dirt and stones with some mud")
cat2 =Category.create!(name:"Asphalt", description: "Smooth pavement")
cat3 =Category.create!(name:"Dirt/Mud", description: "Dirt and mixed terrain")
u1 = User.create!(username: "admin1",email: "admin11@gmail.com", password: "pw1234")
u2 = User.create!(username: "user2",email: "u22@gmail.com", password: "pw1234")
u3 = User.create!(username: "user3",email: "u33@gmail.com", password: "pw1234")
admin = User.create!(username: "admin1", email: "admin1@gmail.com", password: "pw1234", role: "admin")
rr1 = RouteReview.create!(user_id:User.last.id, name: "Widow's Peak to Gravel Fountain", mileage: 68.7, coordinates: [],
description: "This is a wonderful route, full of long hard climbs and fun
descents. It ends at Gravel Fountain", category: Category.first.id,
map_start_latitude: -99.865722, map_start_longitude:39.00211, map_end_latitude:-99.684448, map_end_longitude:  38.972221)
rr2 = RouteReview.create!(user_id:User.last.id, name: "The Devils peak ride", mileage: 90.6, coordinates: [],
description: "This is a hard grinder, 90 miles of gravel and hills", category:  Category.last.id,
map_start_latitude: -101.744384, map_start_longitude:39.32155, map_end_latitude:-101.552124, map_end_longitude: 39.330048)
c1= Comment.create!(user_id:User.first.id, route_review_id:RouteReview.last.id, body:"thanks for posting this, it was intese and fun")
c2= Comment.create!(user_id:User.last.id, route_review_id:RouteReview.first.id, body:"I will be riding this in two weeks")
rrc1= RouteReviewCategory.create!(category_id: cat1.id, route_review_id:rr1.id)
rrc2= RouteReviewCategory.create!(category_id: cat2.id, route_review_id:rr2.id)
