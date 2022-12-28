# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# u1 = User.create({ username:'Noah', password:'mypassword'})
# u2 = User.create({ username:'Jerm', password:'mypassword'})
p1 = Project.create({title:"Art Project", description:"I would like to start a collaborative art project done by multiple people in different art forms", number_of_people:10, creator:"Noah", user_id:3})