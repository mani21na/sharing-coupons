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
        //if(this.coupons().length !== 0) {
            this.element.innerHTML = `
            <div calss="store">
                <h1><a href=${this.website} target="_blank">${this.name}</a></h1>
                <h3>This Store's Coupons:</h3>
                ${this.coupons().map(coupon => coupon.code + ":" + coupon.description + `<button class="delete" data-id="${coupon.id}">Delete</button>`).join(`<br>`)}
            </div>
            `
            return this.element
        //} else {
        //    this.element.innerHTML = ""
        //    return this.element
        //}
    }


}