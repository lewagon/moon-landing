require "subscribe_to_newsletter"

class HomeController < ApplicationController
  def subscribe
    begin
      SubscribeToNewsletter.new.run(params)

      flash[:notice] = "You successfully subscribed to the Newsletter!"
    rescue Gibbon::MailChimpError => e
      flash[:alert] = e.message
    end
    redirect_to root_path
  end
end