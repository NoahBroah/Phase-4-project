class CreateSubcscriptions < ActiveRecord::Migration[7.0]
  def change
    create_table :subcscriptions do |t|
      t.boolean :is_member
      t.integer :user_id
      t.integer :project_id

      t.timestamps
    end
  end
end
