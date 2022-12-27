class User < ApplicationRecord
    has_secure_password #Salts and Hashes password, => saves it to password_digest
end
