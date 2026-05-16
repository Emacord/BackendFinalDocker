import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import handlebars from 'express-handlebars';
import { Server } from 'socket.io';
//import mongoose from 'mongoose';

import passport from "passport";
import { initializePassport } from "./config/passport.config.js";

import cookieParser from "cookie-parser";

import swaggerUi from "swagger-ui-express";
import specs from "./config/swagger.config.js";


import productRouter from './routes/productRouter.js';
import cartRouter from './routes/cartRouter.js';
import viewsRouter from './routes/viewsRouter.js';

import usersRouter from "./routes/users.router.js";

import sessionsRouter from "./routes/sessions.router.js";
import adoptionRouter from "./routes/adoption.router.js";

import __dirname from './utils/constantsUtil.js';
import websocket from './websocket.js';

const app = express();



// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(cookieParser());




// Passport
initializePassport();
app.use(passport.initialize());



// Routes
app.use("/api/users", usersRouter);
app.use("/api/sessions", sessionsRouter);
app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);
app.use("/api/adoptions", adoptionRouter);

// Swagger
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(specs));


// Handlebars
app.engine('handlebars', handlebars.engine());

app.set('views', __dirname + '/../views');
app.set('view engine', 'handlebars');



// Views
app.use('/', viewsRouter);





// Server
const PORT = process.env.PORT || 8080;

let httpServer;

if (process.env.NODE_ENV !== "test") {

  httpServer = app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
  });

  const io = new Server(httpServer);

  websocket(io);
}



// Export para tests
export default app;