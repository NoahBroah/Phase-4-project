class ProjectsController < ApplicationController
    def create

    end

    def show

    end
    
    def index
        projects = Project.all
        render json: projects
    end

    def update

    end

    def destroy

    end

    private

    def project_params
        params.permit(:title, :description, :number_of_people)
    end
end
