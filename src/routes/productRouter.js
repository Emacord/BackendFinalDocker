import { Router } from "express";
import passport from "passport";

import ProductController from "../controllers/product.controller.js";
import { productService } from "../services/index.js";

import { authorization } from "../middlewares/authorization.js";


const router = Router();



const productController = new ProductController(productService);



router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  productController.getProducts
);




router.get(
  "/:pid",
  passport.authenticate("jwt", { session: false }),
  productController.getProductById
);




router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  authorization("admin"),
  productController.createProduct
);




router.put(
  "/:pid",
  passport.authenticate("jwt", { session: false }),
  authorization("admin"),
  productController.updateProduct
);



router.delete(
  "/:pid",
  passport.authenticate("jwt", { session: false }),
  authorization("admin"),
  productController.deleteProduct
);



export default router;
