class ApplicationController < ActionController::API
include ActionController::Cookies

  def login_user
    session[:user_id] = @user.id
  end

  def current_user
    @user = User.find_by_id(session[:user_id])
  end
  
end
