class QuotesController < ApplicationController

    def index
        quotes = Quote.all 
        render json: quotes, status: :ok 
    end 

    def show
        quote = Quote.find_by(id: params[:id])
        render json: quote, status: :ok 
    end 

    # ########### NEED TO GET CHARACTER AND BOOK ID ############### 
    def create 
        current_user = User.find_by(id: session[:user_id])
        if current_user
            quote = Quote.create!(quote_params)
            render json: quote, status: :ok 
        else 
            render json: {error: "unauthorized"}, status: :unauthorized
        end 
    end 

    def update 
        current_user = User.find_by(id: session[:user_id])
        if current_user
            quote = Quote.find_by(id: params[:id])
            quote.update!(quote_params)
            render json: quote, status: :ok 
        else 
            render json: {error: "unauthorized"}, status: :unauthorized
        end 
    end 

    def destroy
        current_user = User.find_by(id: session[:user_id])
        if current_user
            quote = Quote.find_by(id: params[:id])
            quote.destroy
            render json: {}, status: :ok 
        else 
            render json: {error: "unauthorized"}, status: :unauthorized
        end

    end 

    private 

    def quote_params
        params.permit(:quote, :character_id, :book_id)
    end 

end
