import productModel from "./models/productModel.js";

class productDBManager {


    async getAll(params = {}) {
        return await productModel.paginate({}, params);
    }


    async getOne(id) {
        return await productModel.findById(id);
    }


    async create(data) {
        return await productModel.create(data);
    }


    async update(id, data) {
        return await productModel.updateOne({ _id: id }, data);
    }


    async delete(id) {
        return await productModel.deleteOne({ _id: id });
    }

}

export { productDBManager };