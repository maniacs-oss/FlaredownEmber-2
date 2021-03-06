class Api::V1::TagsController < ApplicationController
  load_and_authorize_resource

  def index
    @tags = @tags.includes(:translations)
    if ids.present?
      @tags = @tags.where(id: ids)
    elsif scope.present?
      @tags = CollectionRetriever.new(Tag, scope, current_user).retrieve
    end
    render json: @tags
  end

  def show
    render json: @tag
  end

  def create
    @tag = Tag.create!(create_params)
    render json: @tag
  end

  private

  def create_params
    params.require(:tag).permit(:name)
  end

  def ids
    @ids ||= params[:ids]
  end

  def scope
    @scope ||= params[:scope].try(:to_sym)
  end

end
