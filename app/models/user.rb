# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  fname           :string           not null
#  lname           :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  attr_reader :password

  validates :fname, :lname, :password_digest, :email, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: :true

  after_initialize :ensure_session_token
  #before_validation :ensure_session_token_uniqueness #unnecessary bc session_token unique(?)

  has_many :spots, foreign_key: :owner_id
  has_many :bookings, foreign_key: :author_id
  has_many :reviews, foreign_key: :author_id

  # has_many :favorite_benches,
  # 	through: :favorites,
  # 	source: :bench

  def password= password
  	self.password_digest = BCrypt::Password.create(password)
  	@password = password
  end

  def self.find_by_credentials email, password
  	user = User.find_by(email: email)
  	return nil unless user
  	user.password_is?(password) ? user : nil
  end

  def password_is? password
  	BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
  	self.session_token = new_session_token
  	ensure_session_token_uniqueness
  	self.save
  	self.session_token
  end

  private

  def ensure_session_token
  	self.session_token ||= new_session_token
  end

  def new_session_token
  	SecureRandom.base64
  end

  #unnecessary bc session_token unique(?) but maybe not bc reset_session_token!(?)
  def ensure_session_token_uniqueness
  	while User.find_by(session_token: self.session_token)
  		self.session_token = new_session_token
  	end
  end
end
