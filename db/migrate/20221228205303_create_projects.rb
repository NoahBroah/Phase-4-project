class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :description
      t.integer :number_of_people
      t.string :creator
      t.integer :user_id

      t.timestamps
    end
  end
end
