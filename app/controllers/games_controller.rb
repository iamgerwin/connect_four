class GamesController < ApplicationController
  def index
    %w(first second third fourth fifth sixth seventh).each do |name|
      instance_variable_set("@#{name}_column", "#{name.capitalize}Column".constantize.all.order(:id))
    end

    @white_player = PlayerTracker.find 1
  end
end
