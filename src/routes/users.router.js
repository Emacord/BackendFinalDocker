import { Router } from "express";
import { UserModel } from "../models/user.js";
import { createHash } from "../utils/hash.js";

const router = Router();



/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Users management
 */



/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               email:
 *                 type: string
 *               age:
 *                 type: number
 *               password:
 *                 type: string
 *             example:
 *               first_name: Ema
 *               last_name: Cordoba
 *               email: ema@test.com
 *               age: 22
 *               password: 123456
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: User already exists
 *       500:
 *         description: Internal server error
 */
router.post("/", async (req, res) => {

  try {

    const {
      first_name,
      last_name,
      email,
      age,
      password
    } = req.body;



    const exists = await UserModel.findOne({ email });

    if (exists) {
      return res.status(400).json({
        error: "Usuario ya existe"
      });
    }



    const user = await UserModel.create({
      first_name,
      last_name,
      email,
      age,
      password: createHash(password)
    });



    res.status(201).json(user);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });
  }
});



export default router;
