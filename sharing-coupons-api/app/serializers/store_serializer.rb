class StoreSerializer
  include FastJsonapi::ObjectSerializer
  has_many :coupons
  attributes :name
  link :website


end
