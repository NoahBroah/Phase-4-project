class CreateNotes < ActiveRecord::Migration[7.0]
  def change
    create_table :notes do |t|
      t.string :comment
      t.integer :user_id
      t.integer :project_id

      t.timestamps
    end
  end
end
