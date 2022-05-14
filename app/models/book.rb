class Book < ApplicationRecord
    has_many :quotes, dependent: :destroy
    has_many :characters, through: :quotes 
end
