export default class CartService {

    constructor(repository){
        this.repository = repository
    }

    getCart = async (cid)=>{
        return await this.repository.getCartById(cid)
    }

    createCart = async ()=>{
        return await this.repository.createCart()
    }

    addProductToCart = async (cid,pid)=>{

        const cart = await this.repository.getCartById(cid)

        const productIndex = cart.products.findIndex(
            p => p.product.toString() === pid
        )

        if(productIndex !== -1){

            cart.products[productIndex].quantity += 1

        }else{

            cart.products.push({
                product: pid,
                quantity: 1
            })

        }

        return await this.repository.updateCart(cid,cart)

    }

    removeProductFromCart = async (cid,pid)=>{

        const cart = await this.repository.getCartById(cid)

        cart.products = cart.products.filter(
            p => p.product.toString() !== pid
        )

        return await this.repository.updateCart(cid,cart)

    }

    clearCart = async (cid)=>{
        return await this.repository.updateCart(cid,{ products: [] })
    }

    updateProductQuantity = async (cid,pid,quantity)=>{

        const cart = await this.repository.getCartById(cid)

        const product = cart.products.find(
            p => p.product.toString() === pid
        )

        if(!product){
            throw new Error("Product not found in cart")
        }

        product.quantity = quantity

        return await this.repository.updateCart(cid,cart)

    }

    purchaseCart = async (cid)=>{
        return {
            message: "Purchase simulated successfully"
        }
    }

}