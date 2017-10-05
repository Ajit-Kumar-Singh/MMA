class ApplicationController < ActionController::Base
  protect_from_forgery unless: -> { request.format.json? }

  def hello
    render html: "hello"
  end
 end
