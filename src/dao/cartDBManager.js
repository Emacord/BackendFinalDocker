import { cartModel } from "./models/cartModel.js";

class cartDBManager {



    async getAll() {
        return await cartModel.find();
    }


    async getOne(id) {
        return await cartModel.findById(id);
    }


    async create(data) {
        return await cartModel.create(data);
    }


    async update(id, data) {
        return await cartModel.updateOne({ _id: id }, data);
    }


    async delete(id) {
        return await cartModel.deleteOne({ _id: id });
    }

}

export { cartDBManager };