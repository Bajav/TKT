// import dotenv from "dotenv";
// import cors from 'cors';
import express from "express";
import flightRoutes from './Routes/anotherFlightRoute.js';
import searchFlight from './Routes/searchFlightRt.js'


const port = 3000;
const app = express();



// Middleware setup
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("public"));


app.use('/',flightRoutes);
app.use('/',searchFlight);


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