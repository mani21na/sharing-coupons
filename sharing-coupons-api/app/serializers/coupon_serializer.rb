class CouponSerializer
  include FastJsonapi::ObjectSerializer
  attributes :code, :offer_type, :description, :expiration_date
  belongs_to :store
end
