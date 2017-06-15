class AddUserNameToUsers < ActiveRecord::Migration[5.1]
  def change
  	add_index :users, :user_name, unique: true  
    add_column :users, :user_name, :string
  end
end
