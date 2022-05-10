class CharactersController < ApplicationController

    def index
        characters = Character.all 
        render json: characters, status: :ok 
    end

    def show
        character = Character.find_by(id: params[:id])
        render json: character, status: :ok
    end 

    def create 
        current_user = User.find_by(id: session[:user_id])
        if current_user
            character = Character.create!(character_params)
            render json: character, status: :ok 
        else 
            render json: {error: "unauthorized"}, status: :unauthorized
        end 
    end 

    def update
        current_user = User.find_by(id: session[:user_id])
        if current_user
            character = Character.find_by(id: params[:id])
            character.update!(character_params)
            render json: character, status: :ok
        else
            render json: {error: "unauthorized"}, status: :unauthorized
        end 
    end 

    def destroy
        current_user = User.find_by(id: session[:user_id])
        if current_user
            character = Character.find_by(id: params[:id])
            character.destroy
            render json: {}, status: :ok 
        else
            render json: {error: "unauthorized"}, status: :unauthorized
        end 

    end 

    private 

    def character_params
        params.permit(:name, :species, :home)
    end 

end
