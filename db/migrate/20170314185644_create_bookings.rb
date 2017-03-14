class CreateBookings < ActiveRecord::Migration[5.0]
  def change
    create_table :bookings do |t|
      t.integer :author_id, null: false
      t.integer :spot_id, null: false
      t.datetime :start_time, null: false
      t.datetime :end_time, null: false
      t.timestamps
    end
    add_index :bookings, :author_id
    add_index :bookings, :spot_id
  end
end
