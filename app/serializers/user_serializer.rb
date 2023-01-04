class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest
  has_many :projects
  has_many :notes
end
