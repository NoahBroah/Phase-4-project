class ApplicationController < ActionController::API
include ActionController::Cookies

before_action :authorize

  # def login_user
  #   session[:user_id] = user.id
  # end

  private

  def authorize
    render json: { errors: ["Not Authorized"]}, status: :unauthorized unless session.include? :user_id
  end

end
