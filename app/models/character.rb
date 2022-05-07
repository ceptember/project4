class Character < ApplicationRecord
    has_many :quotes 
    has_many :books, through: :quotes 
end
