require "subscribe_to_newsletter"

class HomeController < ApplicationController
  def subscribe
    begin
      SubscribeToNewsletter.new.run(params)
    rescue Gibbon::MailChimpError => e
      puts e
    end
  end
end