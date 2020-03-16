//Get all Coupons
//Get all Stores


const couponsAdapter = new GranolasAdapter("http://localhost:3000/coupons")
const StoresAdapter = new BrandsAdapter("http://localhost:3000/stores")

couponsAdapter.fetchCoupons()
StoresAdapter.fetchStores()

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
  allGranolas: renderAllGranolas,
  granolasBrands: renderAllGranolasBrands,
  newGranola: renderNewGranolaForm,
  //newBrand: renderNewBrandForm
}

function renderAllGranolas(){
  Granola.all.forEach(granola => {
    main.appendChild(granola.fullRender())
  })
  //render all granolas with name, description, and brand
}

function renderAllGranolasBrands(){
  Brand.all.forEach(brand => {
    main.appendChild(brand.fullRender())
  })
}

function renderNewGranolaForm(){
  formDiv.innerHTML = `
    Granola Name:
    <input type="text" />
    <br>
    Granola Description:
    <input type="text" />
    <br>
    <select>
       <option value="default" selected="selected">Select one option </option>
     ${Brand.all.map(brand => {
       return `<option value=${brand.id}>${brand.name}</option>`
     }).join("")}
    </select>
    <button>Make new Granola!</button>
  `
  main.appendChild(formDiv)
}



