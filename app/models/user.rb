class User < ApplicationRecord
    has_secure_password #Salts and Hashes password, => saves it to password_digest
    
    validates :username, presence: true, uniqueness: true
    validates :password, presence: true, length: { minimum: 6}
    has_many :projects
    has_many :notes, dependent: :destroy
    has_many :projects, through: :notes

#     1. my_created_projects method which will return all projects that the user is the owner of
#     2. my_noted_projects method which will return all projects that the user left a comment on

    # def my_created_projects
    #     #Grab all the projects
    #     projects = Project.all
    #     #Find the current user
    #     user = self
    #     #Iterate through all of the projects
    #     projects.each do |project|
    #         #Find only the projects who belong to that user
    #         if project.user_id == user.id
    #             #Return just those projects
    #             return project
    #         end
    #     end
    # end

    # def my_noted_projects
    #     #Grab all the projects
    #     projects = Project.all

    # end



end
