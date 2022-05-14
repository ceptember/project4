class Character < ApplicationRecord
    has_many :quotes, dependent: :destroy
    has_many :books, through: :quotes 
end
