class CreateFirstSecondThirdFourthFifthSixthSeventhColumns < ActiveRecord::Migration
  def change
    %w(first second third fourth fifth sixth seventh).each do |word|
      create_table "#{word}_columns".to_sym do |t|
        t.string :name, default: ""
        t.boolean :take, default: false
        t.boolean :white_player, default: false
      end
    end
  end
end
