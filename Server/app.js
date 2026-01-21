import express from "express";
import MongoStore from "connect-mongo";
// routes
import cookieRoutes from "./Routes/cookie.routes.js";
import iataRoutes from "./Routes/iataRoutes.js";
// import searchFlight from "./Routes/Flights.routes.js";
import flightRoutes from './Routes/Amadeus/Flights.routes.js'
import stripeRoutes from "./Routes/stripe.routes.js";
import mytiflyroutes from "./Routes/mystifly.routes.js";
import hotelRoutes from './Routes/Hotels/hotelbeds.routes.js'
import openTripRoutes  from './Routes/Opentriproutes/opentrip.routes.js'
// import atlasRoutes from './Routes/atlas.routes.js'
// middleware
import corsMiddleware from "./Middleware/corsMiddleWare.js";
// import sessionSetUp from "./Middleware/cookie.middleware.js";
import loggerMiddleware from "./Middleware/logger.middleware.js";
import session from "express-session";
import mongoose from "mongoose";
// DB
// import {connectAtlasDb} from './Config/DB/mongoAtlas.config.js'

// try {
//   await connectAtlasDb();
// } catch (err) {
//   console.error("Failed to connect to Mongo Atlas. Exiting process.");
//   process.exit(1);
// }

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
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 6000 * 60,
    },
    store: MongoStore.create({
      mongoUrl: process.env.DB_HOST,
      collectionName: "sessions",
      ttl: 60 * 60, // 1 hour
    }),
  })
);

// routes
app.use("/", iataRoutes);
app.use("/", cookieRoutes);
app.use("/", flightRoutes);
app.use("/", stripeRoutes);
app.use("/", mytiflyroutes);
app.use("/", hotelRoutes);
app.use("/", openTripRoutes);

// app.use('/',atlasRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
