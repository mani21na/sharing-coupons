class Store < ApplicationRecord
    has_many :coupons
    
    validates :name, presence: true
    validates :name, uniqueness: true
end
