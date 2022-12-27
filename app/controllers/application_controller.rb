class ApplicationController < ActionController::API
include ActionController::Cookies

before_action :authorize

  def login_user
    session[:user_id] = @user.id
  end

  def find_current_user
    User.find_by(id: session[:user_id])
  end

  private

  def authorize
    @current_user = find_current_user

    render json: { errors: ["Not Authorized"]}, status: :unauthorized unless @current_user
  end

end
