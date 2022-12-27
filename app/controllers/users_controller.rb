class UsersController < ApplicationController
    #Allow a user to singup and login
    def create
        @user = User.create(user_params)
        if @user.valid?
            login_user #This Line logs in the user
            render json: @user, status: :created
        else
            render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def user_params
        params.permit(:username, :password)
    end
end
