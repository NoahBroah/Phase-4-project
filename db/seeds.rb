# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# require 'faker'

# u1 = User.create!({ username:'NewNoah', password:'mypassword'})
# u2 = User.create!({ username:'NewJerm', password:'mypassword'})
# users = [u1,u2]

# for a in 1..5 do
#     for user in users do
#         # create project
#         project = user.projects.create!({title:Faker::Movie.title, description:Faker::Quote.famous_last_words, number_of_people:Faker::Number.number(digits: 2)})
#         for b in 1..5 do
#             # create notes for the project
#             user.notes.create!({comment:Faker::Quote.famous_last_words, project_id: project.id})
#         end
# #     end
# end   