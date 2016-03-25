class Api::V1::SexesController < ApplicationController
  skip_before_filter :authenticate_user!

  def index
    render json: Sex.all
  end

  def show
    sex = Sex.find(sex_id)
    render json: sex
  end

  private

  def sex_id
    id = params.require(:id)
    fail ActionController::BadRequest.new('id param is not a valid sex id') unless Sex.all_ids.include?(id)
    id
  end
end
