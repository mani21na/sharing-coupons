class StoreSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :website
end
