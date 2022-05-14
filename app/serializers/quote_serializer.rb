class QuoteSerializer < ActiveModel::Serializer
  attributes :id, :quote
  belongs_to :character, serializer: QuoteCharacterSerializer
  belongs_to :book, serializer: QuoteBookSerializer
end
