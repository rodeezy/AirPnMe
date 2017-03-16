class CreateSpots < ActiveRecord::Migration[5.0]
  def change
    create_table :spots do |t|
      t.integer :owner_id, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.integer :price, null: false
      t.string :image_url, null: false
      t.string :description, null: false
      t.timestamps
    end
    add_index :spots, :owner_id
    add_index :spots, :price
  end
end
