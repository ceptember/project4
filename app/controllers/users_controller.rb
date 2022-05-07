class UsersController < ApplicationController
    def show
        current_user = User.find_by(id: session[:user_id])
        if current_user
           render json: current_user, status: :created
        else 
           render json: {error: "unauthorized"}, status: :unauthorized
        end 
        
   end 
end
