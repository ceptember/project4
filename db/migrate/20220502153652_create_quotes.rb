class CreateQuotes < ActiveRecord::Migration[6.1]
  def change
    create_table :quotes do |t|
      t.integer :book_id
      t.integer :character_id
      t.string :quote

      t.timestamps
    end
  end
end
