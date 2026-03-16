import { productDBManager } from "../dao/productDBManager.js"
import { cartDBManager } from "../dao/cartDBManager.js"

import ProductRepository from "../repositories/product.repository.js"
import CartRepository from "../repositories/cart.repository.js"

import ProductService from "./product.service.js"
import CartService from "./cart.service.js"

const productDAO = new productDBManager()
const cartDAO = new cartDBManager()

const productRepository = new ProductRepository(productDAO)
const cartRepository = new CartRepository(cartDAO)

export const productService = new ProductService(productRepository)
export const cartService = new CartService(cartRepository)