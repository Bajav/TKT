import express from "express";
import MongoStore from "connect-mongo";
// routes
import cookieRoutes from "./Routes/cookie.routes.js";
import iataRoutes from "./Routes/iataRoutes.js";
// import searchFlight from "./Routes/Flights.routes.js";
import flightRoutes from "./Routes/Amadeus/Flights.routes.js";
import stripeRoutes from "./Routes/stripe.routes.js";
import mytiflyroutes from "./Routes/mystifly.routes.js";
import hotelRoutes from "./Routes/Hotels/hotelbeds.routes.js";
import openTripRoutes from "./Routes/Opentriproutes/opentrip.routes.js";
import sessionRoutes from "./Routes/SessionRoutes/session.routes.js";
import unsplashRoutes from "./Routes/Unsplash/unsplash.routes.js";
import nodemailerRoutes from "./Routes/Nodemailer/nodemailer.routes.js";
// import atlasRoutes from './Routes/atlas.routes.js'
// middleware
import corsMiddleware from "./Middleware/corsMiddleWare.js";
// import sessionSetUp from "./Middleware/cookie.middleware.js";
import loggerMiddleware from "./Middleware/logger.middleware.js";
import session from "express-session";
import mongoose from "mongoose";
// DB
import { connectAtlasDb } from "./Config/DB/mongoAtlas.config.js";

// set up
const port = 3000;
const app = express();

// Middleware setup
app.use(express.json());
app.use(corsMiddleware);
app.use(loggerMiddleware);
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static("public"));
app.use(
  session({
    secret: "keyboard cat",
    resave: false, // Don't save session if unmodified
    saveUninitialized: false, // Don't create session until something stored
    cookie: {
      secure: false, // Set to true in production with HTTPS
      httpOnly: true, // Prevents client-side JS from accessing cookie
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
      // sameSite: "lax", // CRITICAL: Must be 'lax' or 'none' for cross-origin
    },
    store: MongoStore.create({
      mongoUrl: process.env.DB_HOST,
      collectionName: "sessions",
      ttl: 60 * 60 * 24 * 7, // this store will last for 7 days
    }),
  }),
);

// routes
app.use("/", iataRoutes);
app.use("/", cookieRoutes);
app.use("/", flightRoutes);
app.use("/", stripeRoutes);
app.use("/", mytiflyroutes);
app.use("/", hotelRoutes);
app.use("/", openTripRoutes);
app.use("/", sessionRoutes);
app.use("/", unsplashRoutes);
app.use("/", nodemailerRoutes);

// app.use('/',atlasRoutes);
// start databases
const atlas = await connectAtlasDb();
// console.log(atlas);
// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
