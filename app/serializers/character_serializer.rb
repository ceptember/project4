class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :species, :home
end
