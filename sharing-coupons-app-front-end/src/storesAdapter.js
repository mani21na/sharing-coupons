class StoresAdapter {
    constructor(baseURL) {
        this.baseURL = baseURL
    };

    fetchStores() {
        fetch(this.baseURL)
            .then(res => res.json())
            .then(resObj => {
                resObj.data.forEach(this.sanitizeAndAddStore)
            })
            .then(() => console.log(Store.all))
        }

    sanitizeAndAddStore(storeObj) {
        console.log(storeObj);
        let sanitized = {...storeObj.attributes, id: storeObj.id, website: storeObj.link}
        new Store(sanitized)
    }

    newStore(storeObj) {
        let configObj = {
            method: "POST",
            headers: {"Content-Type": "application/json", "Accepts": "application/json"},
            body: JSON.stringify(storeObj)
        }
        fetch(this.baseURL, configObj)
            .then(res => res.json())
            .then((resObj) => this.sanitizeAndAddStore(resObj.data))
    }
}