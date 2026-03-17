export default class CartService {

    constructor(repository){
        this.repository = repository
    }

    getCart = async (cid)=>{

        const cart = await this.repository.getCartById(cid)

        if(!cart){
            throw new Error("Cart not found")
        }

        return cart
    }

    createCart = async ()=>{
        return await this.repository.createCart()
    }

    addProductToCart = async (cid,pid)=>{

        const cart = await this.repository.getCartById(cid)

        if(!cart){
            throw new Error("Cart not found")
        }

        const productIndex = cart.products.findIndex(
            p => p.product.toString() === pid
        )

        if(productIndex !== -1){

            cart.products[productIndex].quantity += 1
        } else {
            cart.products.push({
                product: pid,
                quantity: 1
            
            })
            
        }

        await this.repository.updateCart(cid,cart)

        return await this.repository.getCartById(cid)
    }

    removeProductFromCart = async (cid,pid)=>{

        const cart = await this.repository.getCartById(cid)

        if(!cart){
            throw new Error("Cart not found")
        }

        cart.products = cart.products.filter(
            p => p.product.toString() !== pid
        )

        await this.repository.updateCart(cid,cart)

        return await this.repository.getCartById(cid)
    }

    clearCart = async (cid)=>{

        const cart = await this.repository.getCartById(cid)

        if(!cart){
            throw new Error("Cart not found")
        }

        await this.repository.updateCart(cid,{ products: [] })

        return await this.repository.getCartById(cid)
    }

    updateProductQuantity = async (cid,pid,quantity)=>{

        const cart = await this.repository.getCartById(cid)

        if(!cart){
            throw new Error("Cart not found")
        }

        const product = cart.products.find(
            p => p.product.toString() === pid
        )

        if(!product){
            throw new Error("Product not found in cart")
        }

        product.quantity = quantity

        await this.repository.updateCart(cid,cart)

        return await this.repository.getCartById(cid)
    }

    purchaseCart = async (cid)=>{

        const cart = await this.repository.getCartById(cid)

        if(!cart){
            throw new Error("Cart not found")
        }

        return {
            message: "Purchase simulated successfully"
        }
    }

}