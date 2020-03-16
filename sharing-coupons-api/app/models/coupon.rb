class Coupon < ApplicationRecord
    belongs_to :store
 
    validates :code, :offer_type, :description, presence: true
    validates :username, uniqueness: true
end
