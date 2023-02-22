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


    # def top_users
    #     users = User.all
    #     # debugger
    #     top_3 = users.max_by(3) { |u| u.notes.length}
    #     render json: top_3
    # end

    private

    def user_params
        params.permit(:username, :password)
    end

    
end
