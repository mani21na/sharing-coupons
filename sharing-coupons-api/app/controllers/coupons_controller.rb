class CouponsController < ApplicationController
    def index
        coupons = Coupon.all
        render json: CouponSerializer.new(coupons)
      end
    
    def show
        coupon = Coupon.find_by(params[:id])
        render json: CouponSerializer.new(coupon)
    end

    def create
        newCoupon = Coupon.create(code: params['code'], offer_type: params['offerType'], description: params['description'], expiration_date: params['expirationDate'], store_id: params['storeId'])
        render json: CouponSerializer.new(newCoupon)
    end

    def destroy
        coupon = Coupon.find_by(id: params[:id])
        coupon.destroy
    end
    
end
