class BooksController < ApplicationController

    def index
        books = Book.all 
        render json: books, status: :ok 
    end 

    def show
        book = Book.find_by(id: params[:id])
        render json: book, status: :ok 
    end

    def create 
        current_user = User.find_by(id: session[:user_id])
        if current_user
            book = Book.create!(book_params)
            render json: book, status: :created
        else 
            render json: {error: "unauthorized"}, status: :unauthorized
        end
    end 

    def update
        current_user = User.find_by(id: session[:user_id])
        if current_user
            book = Book.find_by(id: params[:id])
            book.update(book_params)
            render json: book, status: :ok 
        else
            render json: {error: "unauthorized"}, status: :unauthorized
        end 
    end

    def destroy 
        book = Book.find_by(id: params[:id])
        current_user = User.find_by(id: session[:user_id])
        if current_user
            book.destroy
            render json {}, status: :ok 
        else
            render json: {error: "unauthorized"}, status: :unauthorized
        end 
    end 



    private 

    def book_params 
        params.permit(:title, :author, :year_published)
    end 

end
