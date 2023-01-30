# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# require 'faker'

u1 = User.create!({ username:'Noah', password:'mypassword'})
u2 = User.create!({ username:'Jerm', password:'mypassword'})
u3 = User.create!({ username:'Mia', password:'mypassword'})
p1 = Project.create!({ title: "Art Project", description:"Let's make a cool project together", number_of_people:30 })
p2 = Project.create!({ title: "Music Project", description:"Let's make a cool Music project together", number_of_people:12 })
p3 = Project.create!({ title: "Business Project", description:"Let's collaborate on a business idea", number_of_people:5 })
p4 = Project.create!({ title: "Coding Project", description:"Let's make a cool Coding project together", number_of_people:3 })
p5 = Project.create!({ title: "Pottery Project", description:"Let's make a cool Pottery project together", number_of_people:10})
p6 = Project.create!({ title: "Mural Project", description:"Let's make a cool Mural together", number_of_people:4})
n1 = Note.create!({ comment: "I would love to work on this with you!", user_id:1, project_id:3})
n2 = Note.create!({ comment: "I would love to work on this with you!", user_id:1, project_id:4})
n3 = Note.create!({ comment: "I would love to work on this with you!", user_id:2, project_id:5})
n4 = Note.create!({ comment: "I would love to work on this with you!", user_id:2, project_id:6})
n5 = Note.create!({ comment: "I would love to work on this with you!", user_id:3, project_id:1})
n6 = Note.create!({ comment: "Great lets do it!", user_id:1, project_id:2})
n7 = Note.create!({ comment: "I would love to work on this with you!", user_id:1, project_id:3})









# end   