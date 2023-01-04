class NotesController < ApplicationController

    def show
        note = Note.find_by(id: params[:id])
        render json: note, include: :projects, status: :ok
    end
    
    def index
        notes = Note.all
        render json: notes, include: :projects, status: :ok
    end

    def create
        note = @current_user.notes.create(note_params)
        
        render json: note, status: :created
    end

    private

    def note_params
        params.permit(:comment, :project_id)
    end
end
