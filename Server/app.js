import express from "express";
// routes
import cookieRoutes from './Routes/cookie.routes.js'
import iataRoutes from './Routes/iataRoutes.js'
import searchFlight from './Routes/searchFlightRt.js'
import stripeRoutes from './Routes/stripe.routes.js'
// middleware
import corsMiddleware from "./Middleware/corsMiddleWare.js";
import cookieParserMiddleware from "./Middleware/cookie.middleware.js";
import loggerMiddleware from "./Middleware/logger.middleware.js";

// set up
const port = 3000;
const app = express();



// Middleware setup
app.use(express.json());
app.use(corsMiddleware);
app.use(cookieParserMiddleware);
app.use(loggerMiddleware);
app.set("view engine", "ejs");
app.use(express.static("public"));


// routes
app.use('/',iataRoutes);
app.use('/',cookieRoutes);
app.use('/',searchFlight);
app.use('/',stripeRoutes);


// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});





































































































// try{
// const response = await amadeus.booking.flightOrders.post({
//   data: {
//     type: "flight-order",
//     flightOffers: [pricingResponse.data.flightOffers[0]],
//     travelers: [
//       {
//         id: "1",
//         dateOfBirth: "1982-01-16",
//         name: {
//           firstName: "JORGE",
//           lastName: "GONZALES",
//         },
//         gender: "MALE",
//         contact: {
//           emailAddress: "jorge.gonzales833@telefonica.es",
//           phones: [
//             {
//               deviceType: "MOBILE",
//               countryCallingCode: "34",
//               number: "480080076",
//             },
//           ],
//         },
//         documents: [
//           {
//             documentType: "PASSPORT",
//             birthPlace: "Madrid",
//             issuanceLocation: "Madrid",
//             issuanceDate: "2015-04-14",
//             number: "00000000",
//             expiryDate: "2025-04-14",
//             issuanceCountry: "ES",
//             validityCountry: "ES",
//             nationality: "ES",
//             holder: true,
//           },
//         ],
//       },
//     ],
//   },
// });
// console.log(response);
// } catch (error) {
// console.error(error);
// }