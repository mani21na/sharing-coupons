class CouponsAdapter {
    constructor(baseURL) {
      this.baseURL = baseURL
    }
  
    fetchCoupons() {
      fetch(this.baseURL)
        .then(res => res.json())
        .then(resObj => {
          resObj.data.forEach(this.sanitizeAndAddCoupon)
        })
        .then(() => console.log(Coupon.all))
    }
  
    sanitizeAndAddCoupon(couponObj) {
      console.log(couponObj);
      let sanitized = {...couponObj.attributes, id: couponObj.id, storeId: couponObj.relationships.store.data.id}
      new Coupon(sanitized)
    }

    newCoupon(couponObj) {
      let configObj = {
        method: "POST",
        headers: {"Content-Type": "application/json", "Accepts": "application/json"},
        body: JSON.stringify(couponObj)
      }
      fetch(this.baseURL, configObj)
        .then(res => res.json())
        .then((resObj) => this.sanitizeAndAddCoupon(resObj.data))
        .catch(function(error) {
          console.log(error.message);
        });
    }
  }