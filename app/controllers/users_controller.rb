class UsersController < ApplicationController
    before_action :authorize, only: :show

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id #This Line logs in the user
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        current_user = User.find_by(id: session[:user_id])
        render json: current_user
    end

    def index
        user = User.all
        render json: user
    end

#     Top Users
# Create a custom route which finds the top three app users. Use the number of notes that user has created as a way of measuring who the top users are. If there is a tie, it is ok to send back more than three users.

    # def top_users
    #     #Get the users
    #     users = User.joins(:notes).group('users.id').where('notes.')
    #     #Find number of notes for each user

    #     # find users by amount of notes created
    # end

    private

    def user_params
        params.permit(:username, :password)
    end

    
end
