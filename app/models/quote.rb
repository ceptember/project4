class Quote < ApplicationRecord
    belongs_to :character 
    belongs_to :book 
end
