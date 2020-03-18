class Coupon{
    static all = []
  
    constructor({id, code, offer_type, description, expiration_date, storeId}){
      this.id = id
      this.code = code
      this.offerType = offer_type
      this.description = description
      this.expirationDate = expiration_date
      this.storeId = storeId
  
      this.element = document.createElement('div')
      this.element.className = "coupon"
      this.element.id = `coupon-${this.id}`
  
      Coupon.all.push(this)
    }
  
    store(){
      return Store.all.find(store => store.id === this.storeId)
    }
  
    partialRender(){
      this.element.innerHTML = `
        <h3>${this.code}</h3>
        <p>Store: ${this.store().name}</p>
        <p>Store: ${this.store().name}</p>
        <p>Description: ${this.description}</p>
      `
      return this.element
    }
  
  
    fullRender(){
      this.element.innerHTML = `
      <h1>${this.code}</h1>
      <p>Store: <a href=${this.store().website} target="_blank">${this.store().name}</a></p>
      <p>Offer Type: ${this.offerType}</p>
      <p>Description: ${this.description}</p>
      <p>Expiration Date: ${this.expirationDate}</p>
      `
      return this.element
    }
  }