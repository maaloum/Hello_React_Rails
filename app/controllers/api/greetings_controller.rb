class Api::GreetingsController < ApplicationController
    def random
      greeting = Message.order("RANDOM()").first
      render json: { message: greeting.message }
    end
  end
  