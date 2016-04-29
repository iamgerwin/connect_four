# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20160429021224) do

  create_table "fifth_columns", force: :cascade do |t|
    t.string  "name",         default: ""
    t.boolean "take",         default: false
    t.boolean "white_player", default: false
  end

  create_table "first_columns", force: :cascade do |t|
    t.string  "name",         default: ""
    t.boolean "take",         default: false
    t.boolean "white_player", default: false
  end

  create_table "fourth_columns", force: :cascade do |t|
    t.string  "name",         default: ""
    t.boolean "take",         default: false
    t.boolean "white_player", default: false
  end

  create_table "player_trackers", force: :cascade do |t|
    t.string  "name"
    t.boolean "active", default: true
  end

  create_table "second_columns", force: :cascade do |t|
    t.string  "name",         default: ""
    t.boolean "take",         default: false
    t.boolean "white_player", default: false
  end

  create_table "seventh_columns", force: :cascade do |t|
    t.string  "name",         default: ""
    t.boolean "take",         default: false
    t.boolean "white_player", default: false
  end

  create_table "sixth_columns", force: :cascade do |t|
    t.string  "name",         default: ""
    t.boolean "take",         default: false
    t.boolean "white_player", default: false
  end

  create_table "third_columns", force: :cascade do |t|
    t.string  "name",         default: ""
    t.boolean "take",         default: false
    t.boolean "white_player", default: false
  end

end
