class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :species
      t.string :home

      t.timestamps
    end
  end
end
