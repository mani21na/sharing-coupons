class StoresAdapter {
    constructor(baseURL) {
        this.baseURL = baseURL
    };

    fetchBrands() {
        fetch(this.baseURL)
            .then(res => res.json())
            .then(resObj => {
                resObj.data.forEach(obj => {
                    //?
                    let sanitized = {id: obj.id, ...obj.attributes}
                    new StoresAdapter(sanitized)
                })
            })
            .then(() => console.log(Store.all))
    }
}