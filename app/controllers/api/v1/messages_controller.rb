class Api::V1::MessagesController < ApplicationController
  def index
    # generate random number between 1 and 5
    random_number = rand(1..5)
    # return a random greeting
    @greeting = Message.find(random_number)
    json_response(@greeting)
  end

  private

  def json_response(object, status = :ok)
    render json: object, status:
  end
end
