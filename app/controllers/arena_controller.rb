class ArenaController < ApplicationController
  before_action :find_white_player

  def reload
    @white_player.update(active: true)
    %w(first second third fourth fifth sixth seventh).map do |ordinal|
      "#{ordinal.capitalize}Column".constantize.where(take: true).update_all(take: false)
      "#{ordinal.capitalize}Column".constantize.where(white_player: true).update_all(white_player: false)
    end

    flash[:notice] = "Game Reloaded"
    redirect_to root_url
  end

  %w(first second third fourth fifth sixth seventh).map do |ordinal|
    define_method "drop_cap_to_#{ordinal}_column" do
      @rows = "#{ordinal.capitalize}Column".constantize.all.order("id DESC")
    	@rows.each do |present_row|
        unless present_row.take
      		present_row.update(take: true)
      		  if @white_player.active?
      		  	present_row.update(white_player: true)
      		  	@white_player.update(active: false)
      		  else
      		  	present_row.update(white_player: false)
      		  	@white_player.update(active: true)
      		  end
      		break
    	  end
    	end
    	flash[:notice] = "Change Turn"
    	redirect_to root_url
    end
  end

  private

  def find_white_player
  	@white_player = PlayerTracker.find(1)
  end
end
