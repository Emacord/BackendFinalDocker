
class ProductRepository {



    constructor(dao) {

        this.dao = dao;

    }

    async getProducts(query){
        return await this.dao.getAll(query);
    }

    async getProductById(pid){
        return await this.dao.getOne(pid);
    }

    async createProduct(product){
        return await this.dao.create(product);
    }

    async updateProduct(pid,product){
        return await this.dao.update(pid,product);
    }

    async deleteProduct(pid){
        return await this.dao.delete(pid);
    }

}

export default ProductRepository;