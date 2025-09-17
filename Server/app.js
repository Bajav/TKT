import express from "express";
// routes
import cookieRoutes from './Routes/cookie.routes.js'
import iataRoutes from './Routes/iataRoutes.js'
import searchFlight from './Routes/searchFlightRt.js'
import stripeRoutes from './Routes/stripe.routes.js'
import mytiflyroutes from './Routes/mystifly.routes.js'
// import atlasRoutes from './Routes/atlas.routes.js'
// middleware
import corsMiddleware from "./Middleware/corsMiddleWare.js";
// import sessionSetUp from "./Middleware/cookie.middleware.js";
import loggerMiddleware from "./Middleware/logger.middleware.js";

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
// app.use(sessionSetUp);
app.use(loggerMiddleware);
app.set("view engine", "ejs");
app.use(express.static("public"));

// routes
app.use('/',iataRoutes);
app.use('/',cookieRoutes);
app.use('/',searchFlight);
app.use('/',stripeRoutes);
app.use('/',mytiflyroutes);
// app.use('/',atlasRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
