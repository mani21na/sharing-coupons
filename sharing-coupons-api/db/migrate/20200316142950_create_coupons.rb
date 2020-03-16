class CreateCoupons < ActiveRecord::Migration[6.0]
  def change
    create_table :coupons do |t|
      t.string :code
      t.string :offer_type
      t.string :description
      t.string :expiration_date
      t.string :store_id

      t.timestamps
    end
  end
end
