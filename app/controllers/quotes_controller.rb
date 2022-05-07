class QuotesController < ApplicationController

    def index
        quotes = Quote.all 
        render json: quotes, status: :ok 
    end 

end
