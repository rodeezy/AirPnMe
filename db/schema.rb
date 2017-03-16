# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170314185648) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.integer  "author_id",  null: false
    t.integer  "spot_id",    null: false
    t.datetime "start_time", null: false
    t.datetime "end_time",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_bookings_on_author_id", using: :btree
    t.index ["spot_id"], name: "index_bookings_on_spot_id", using: :btree
  end

  create_table "reviews", force: :cascade do |t|
    t.integer  "author_id",  null: false
    t.integer  "spot_id",    null: false
    t.integer  "rating",     null: false
    t.string   "body",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_reviews_on_author_id", using: :btree
    t.index ["spot_id"], name: "index_reviews_on_spot_id", using: :btree
  end

  create_table "spots", force: :cascade do |t|
    t.integer  "owner_id",    null: false
    t.float    "lat",         null: false
    t.float    "lng",         null: false
    t.integer  "price",       null: false
    t.string   "image_url",   null: false
    t.string   "description", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["owner_id"], name: "index_spots_on_owner_id", using: :btree
    t.index ["price"], name: "index_spots_on_price", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "fname",           null: false
    t.string   "lname",           null: false
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["fname"], name: "index_users_on_fname", using: :btree
    t.index ["lname"], name: "index_users_on_lname", using: :btree
    t.index ["session_token"], name: "index_users_on_session_token", using: :btree
  end

end
