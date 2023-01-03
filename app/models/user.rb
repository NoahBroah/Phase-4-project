class User < ApplicationRecord
    has_secure_password #Salts and Hashes password, => saves it to password_digest
    
    validates :username, presence: true, uniqueness: true
    validates :password, presence: true, length: { minimum: 6}
    has_many :projects
    has_many :subscriptions, dependent: :destroy
end
