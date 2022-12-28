class UsersController < ApplicationController
    #Allow a user to singup and login
    skip_before_action :authorize, only: [:create, :index]

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
        render json: @current_user
    end

    def index
        user = User.all
        render json: user
    end

    private

    def user_params
        params.permit(:username, :password)
    end
end
