class RemoveCreatorFromProjects < ActiveRecord::Migration[7.0]
  def change
    remove_column :projects, :creator, :string
  end
end
