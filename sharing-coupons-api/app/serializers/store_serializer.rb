class StoreSerializer
  include FastJsonapi::ObjectSerializer
  has_many :coupons
  attributes :name, :website


end
