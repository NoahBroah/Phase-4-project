class UsersController < ApplicationController
    #Allow a user to singup and login
    skip_before_action :authorize, only: :create

    def create
        @user = User.create(user_params)
        if @user.valid?
            login_user #This Line logs in the user
            render json: @user, status: :created
        else
            render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        render json: @current_user
    end

    private

    def user_params
        params.permit(:username, :password)
    end
end
