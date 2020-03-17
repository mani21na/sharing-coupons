//Get all Coupons
//Get all Stores

//server request
const couponsAdapter = new CouponsAdapter("http://127.0.0.1:3000/coupons")
const storesAdapter = new StoresAdapter("http://127.0.0.1:3000/stores")

couponsAdapter.fetchCoupons()
storesAdapter.fetchStores()

const main = document.getElementById('main')
const menu = document.getElementById('menu')

const formDiv = document.createElement('div')

menu.addEventListener('click', handleMenuClick)
formDiv.addEventListener('click', handleFormSubmit)

function handleMenuClick (event){
  if (event.target.id !== menu){
    main.innerHTML = ``
    callbacks[`${event.target.id}`]()
  }
}

function handleFormSubmit(event){
  if(event.target.tagName == "BUTTON"){
    let inputs = formDiv.querySelectorAll('input')
    let select = formDiv.querySelector('select')
    let newCouponObj = {
      code: inputs[0].value,
      offer_type: inputs[1].value,
      description: inputs[2].value,
      expiration_date: inputs[3].value,
      storeId: select.value
    }
    couponsAdapter.newCoupon(newCouponObj)
  }
}

const callbacks = {
  allCoupons: renderAllCoupons,
  couponsStores: renderAllCouponsStores,
  newCoupon: renderNewCouponForm,
  newStore: renderNewStoreForm
}

function renderAllCoupons(){
  Coupon.all.forEach(coupon => {
    main.appendChild(coupon.fullRender())
  })
}

function renderAllCouponsStores(){
  Store.all.forEach(store => {
    main.appendChild(store.fullRender())
  })
}

function renderNewCouponForm(){
  formDiv.innerHTML = `
    Coupon Code:
    <input type="text" />
    <br>
    Offer Type:
    <select>
      <option value="online">Online Code</option>
      <option value="store">In-Store Coupon</option>
    </select>
    <br>
    Coupon Description:
    <input type="text" />
    <br>
    <select>
       <option value="default" selected="selected">Select Store of this Coupon </option>
     ${Store.all.map(store => {
       return `<option value=${store.id}>${store.name}</option>`
     }).join("")}
    </select>
    <button type="button">New Coupon</button>
  `
  main.appendChild(formDiv)
}

function renderNewStoreForm() {
  formDiv.innerHTML = `
    Store:
    <input type="text" />
    <br>
    Website:
    <input type="text" />
    <br>
    <button>New Store</button>
  `
  main.appendChild(formDiv)
}


