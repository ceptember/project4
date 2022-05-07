class QuoteSerializer < ActiveModel::Serializer
  attributes :id, :book_id, :character_id, :quote
  belongs_to :character
end
