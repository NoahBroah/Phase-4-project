class ProjectsController < ApplicationController
    before_action :authorize
    skip_before_action :authorize, only: :index
    def create
        project = Project.create(project_params)
        if project.valid?
            render json: project, status: :created
        else
            render json: { errors: project.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        project = Project.find_by(id: params[:id])
        render json: project, status: :ok
    end
    
    def index
        projects = Project.all
        render json: projects, status: :ok
    end


    private

    def project_params
        params.permit(:user_id, :title, :description, :number_of_people)
    end
end
