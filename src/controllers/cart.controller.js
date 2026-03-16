export default class CartController {

    constructor(service){
        this.service = service
    }

    getCart = async (req,res)=>{
        try{
            const result = await this.service.getCart(req.params.cid)

            res.send({
                status:"success",
                payload: result
            })

        }catch(error){
            res.status(400).send({
                status:"error",
                message:error.message
            })
        }
    }

    createCart = async (req,res)=>{
        try{
            const result = await this.service.createCart()

            res.send({
                status:"success",
                payload: result
            })

        }catch(error){
            res.status(400).send({
                status:"error",
                message:error.message
            })
        }
    }

    addProductToCart = async (req,res)=>{
        try{
            const {cid,pid} = req.params

            const result = await this.service.addProductToCart(cid,pid)

            res.send({
                status:"success",
                payload: result
            })

        }catch(error){
            res.status(400).send({
                status:"error",
                message:error.message
            })
        }
    }

    removeProductFromCart = async (req,res)=>{
        try{
            const {cid,pid} = req.params

            const result = await this.service.removeProductFromCart(cid,pid)

            res.send({
                status:"success",
                payload: result
            })

        }catch(error){
            res.status(400).send({
                status:"error",
                message:error.message
            })
        }
    }

    clearCart = async (req,res)=>{
        try{
            const result = await this.service.clearCart(req.params.cid)

            res.send({
                status:"success",
                payload: result
            })

        }catch(error){
            res.status(400).send({
                status:"error",
                message:error.message
            })
        }
    }

    updateProductQuantity = async (req,res)=>{
        try{
            const {cid,pid} = req.params
            const {quantity} = req.body

            const result = await this.service.updateProductQuantity(cid,pid,quantity)

            res.send({
                status:"success",
                payload: result
            })

        }catch(error){
            res.status(400).send({
                status:"error",
                message:error.message
            })
        }
    }

    purchaseCart = async (req,res)=>{
        try{
            const result = await this.service.purchaseCart(req.params.cid)

            res.send({
                status:"success",
                payload: result
            })

        }catch(error){
            res.status(400).send({
                status:"error",
                message:error.message
            })
        }
    }

}