# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
column_content = []
(1..6).map do |num|
  column_content << {name: "row_#{num}"}
end

FirstColumn.create(column_content)
SecondColumn.create(column_content)
ThirdColumn.create(column_content)
FourthColumn.create(column_content)
FifthColumn.create(column_content)
SixthColumn.create(column_content)
SeventhColumn.create(column_content)

PlayerTracker.create(name: 'white_player')
