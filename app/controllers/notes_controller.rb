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

    end
end
