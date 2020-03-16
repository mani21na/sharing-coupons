class Store{
    static all = []

    constructor({id, name, website}) {
        this.id = id
        this.name = name
        this.website = website

        this.element = document.createElement('div')
        this.element.className = "store"
        this.element.id = `brand-${this.id}`

        Store.all.push(this);
    }

    coupons() {
        return Coupon.all.filter(function(coupon) {
            return coupon.storeId === this.id
        }, this)
    }

    fullRender() {
        this.element.innerHTML = `
        <h1>${this.name}</h1>
        <h3>This Store's Coupons:</h3>
        ${this.coupons().map(coupon => coupon.name).join(", ")}
      `
      return this.element
    }
}