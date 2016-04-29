class ArenaController < ApplicationController
  before_action :find_white_player

  def reload
    %w(First Second Third Fourth Fifth Sixth Seventh).map do |name|
      "#{name}Column".constantize.where(take: true).update_all(take:false)
    end

    @white_player.update(active: true)
    flash[:notice] = "Game Reloaded"
    redirect_to root_url
  end

  %w(first second third fourth fifth sixth seventh).map do |name|
    define_method "drop_cap_to_#{name}_column" do
      @rows = "#{name.capitalize}Column".constantize.all.order("id DESC")
    	@rows.each do |row|
    	  if !row.take
    	 	present_row = row
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
