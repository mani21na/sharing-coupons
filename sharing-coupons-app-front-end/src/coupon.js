class Coupon{

    static all = []
  
    constructor({id, code, offerType, description, expirationDate, storeId}){
      this.id = id
      this.code = code
      this.offerType = offerType
      this.description = description
      this.expirationDate = expirationDate
      this.storeId = storeId
  
      this.element = document.createElement('div')
      this.element.className = "coupon"
      this.element.id = `coupon-${this.id}`
  
      Coupon.all.push(this)
    }
  
    store(){
      debugger;
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
      <p>Store: ${this.store().name}</p>
      <p>Offer Type: ${this.offerType}</p>
      <p>Description: ${this.description}</p>
      <p>Expiration Date: ${this.expirationDate}</p>
      `
      return this.element
    }
  }