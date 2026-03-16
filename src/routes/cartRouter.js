import { Router } from "express";
import passport from "passport";

import CartController from "../controllers/cart.controller.js";
import { cartService } from "../services/index.js";

const router = Router();


const cartController = new CartController(cartService);



router.get(
    "/:cid",
    passport.authenticate("jwt", { session: false }),
    cartController.getCart
);



router.post(
    "/",
    passport.authenticate("jwt", { session: false }),
    cartController.createCart
);



router.post(
    "/:cid/product/:pid",
    passport.authenticate("jwt", { session: false }),
    cartController.addProductToCart
);



router.delete(
    "/:cid/product/:pid",
    passport.authenticate("jwt", { session: false }),
    cartController.removeProductFromCart
);



router.delete(
    "/:cid",
    passport.authenticate("jwt", { session: false }),
    cartController.clearCart
);



router.put(
    "/:cid/product/:pid",
    passport.authenticate("jwt", { session: false }),
    cartController.updateProductQuantity
);



router.post(
    "/:cid/purchase",
    passport.authenticate("jwt", { session: false }),
    cartController.purchaseCart
);

export default router;

