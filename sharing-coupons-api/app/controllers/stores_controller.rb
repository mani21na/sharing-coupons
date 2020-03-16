class StoresController < ApplicationController
    def index
        stores = Store.all
        render json: StoreSerializer.new(stores)
    end

    def show
        store = Store.find_by(params[:id])
        render json: StoreSerializer.new(store)
    end
    
    def create
        newStore = Store.create(name: params['name'], website: params['website'])
        render json: StoreSerializer.new(newStore)
    end

    def destroy
        store = Store.find_by(id: params[:id])
        store.destroy
    end
end
