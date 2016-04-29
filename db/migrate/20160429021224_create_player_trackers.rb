class CreatePlayerTrackers < ActiveRecord::Migration
  def change
    create_table :player_trackers do |t|
      t.string :name
      t.boolean :active, default:true
    end
  end
end
