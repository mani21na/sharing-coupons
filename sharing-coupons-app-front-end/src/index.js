//Get all Coupons
//Get all Stores

//server request
const couponsAdapter = new CouponsAdapter("http://localhost:3000/coupons")
const storesAdapter = new StoresAdapter("http://localhost:3000/stores")

couponsAdapter.fetchCoupons()
storesAdapter.fetchStores()

const main = document.getElementById('main')
const menu = document.getElementById('menu')
const formDiv = document.createElement('div')

menu.addEventListener('click', handleMenuClick)
formDiv.addEventListener('click', handleFormSubmit)

function handleMenuClick (event) {
  if (event.target.id !== menu){
    main.innerHTML = ``
    callbacks[`${event.target.id}`]()
  }
}

function handleFormSubmit(event){
  if(event.target.tagName == "BUTTON") {
    let inputs = formDiv.querySelectorAll('input')
    let selects = formDiv.querySelectorAll('select')
    
    if(event.target.name == "new_coupon") {
      let newCouponObj = {
        code: inputs[0].value,
        offerType: selects[0].value,
        description: inputs[1].value,
        expirationDate: inputs[2].value,
        storeId: selects[1].value
      }
      couponsAdapter.newCoupon(newCouponObj)
      main.innerHTML = ""

    } else if(event.target.name == "new_store") {
      let newStoreObj = {
        name: inputs[0].value,
        website: inputs[1].value,
      }
      storesAdapter.newStore(newStoreObj)
      main.innerHTML = ""
    }
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
    if(coupon.expirationDate > today()) {
      main.appendChild(coupon.fullRender())
    }
  })
}

function renderAllCouponsStores(){
  Store.all.forEach(store => {
    if(store.coupons().map(coupon => coupon.expirationDate > today())) {
      main.appendChild(store.fullRender())
    }
  })
}

function today() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();

  return today = mm + '/' + dd + '/' + yyyy;
}

function renderNewCouponForm(){
  formDiv.innerHTML = `
    <div class="new-coupon">
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
      Expiration Date:
      <input type="text" />
      <br>
      Store:
      <select>
         <option value="default" selected="selected">Select Store of this Coupon</option>
          ${Store.all.map(store => {
            return `<option value=${store.id}>${store.name}</option>`
          }).join("")}
      </select>
      <br>
      <button name="new_coupon" type="button">New Coupon</button>
    </div>
    `
  main.appendChild(formDiv)
}

function renderNewStoreForm() {
  formDiv.innerHTML = `
    <div class="new-store">  
      Store:
      <input type="text" />
      <br>
      Website:
      <input type="text" />
      <br>
      <button name="new_store" type="button">New Store</button>
    </div>
    `
  main.appendChild(formDiv)
}



