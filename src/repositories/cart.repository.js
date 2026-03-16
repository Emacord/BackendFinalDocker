export default class CartRepository {

    constructor(dao){
        this.dao = dao
    }


    getCartById = async (cid)=>{
        return await this.dao.getOne(cid)
    }


    createCart = async ()=>{
        return await this.dao.create({ products: [] })
    }


    updateCart = async (cid,data)=>{
        return await this.dao.update(cid,data)
    }

}