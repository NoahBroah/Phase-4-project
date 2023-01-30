class NotesController < ApplicationController

    def show
        note = Note.find_by(id: params[:id])
        render json: note, status: :ok
    end
    
    def index
        notes = Note.all
        render json: notes, status: :ok
    end

    def create
        note = @current_user.notes.create(note_params)
        
        render json: note, status: :created
    end

    def update
        user = @current_user
        note = Note.find_by(id: params[:id])
        if user.id == note.user_id
            note.update(note_params)
            render json: note, status: :created
        else
            render json: {errors: ["Not Authorized"]}, status: :unauthorized
        end
    end

    def destroy
            user = @current_user
            note = Note.find_by(id: params[:id])
            if user.id == note.user_id
                note.delete
                head :no_content
            else
                render json: { errors: ["Not Authorized"]}, status: :unauthorized
            end
        end

    private

    def note_params
        params.permit(:comment, :project_id)
    end
end
