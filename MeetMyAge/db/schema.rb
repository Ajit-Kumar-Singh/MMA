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

ActiveRecord::Schema.define(version: 20170902131956) do

  create_table "mma_group_memberships", force: :cascade do |t|
    t.integer "profile_id"
    t.date "joined_on"
    t.datetime "last_login"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "mma_groups", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "group_type"
    t.integer "icon"
    t.string "group_size"
    t.string "interests"
    t.string "images"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "mma_interests", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.boolean "is_enabled"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "mma_locations", force: :cascade do |t|
    t.string "city"
    t.string "state"
    t.decimal "latitude"
    t.decimal "longitude"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "mma_user_profiles", force: :cascade do |t|
    t.string "name"
    t.string "about_me"
    t.string "gender"
    t.string "education"
    t.string "work"
    t.integer "age"
    t.string "mobile_number"
    t.string "email"
    t.boolean "is_mobile_verifed"
    t.string "image"
    t.string "user_type"
    t.integer "location_id"
    t.string "auth_token"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
