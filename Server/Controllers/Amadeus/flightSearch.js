import amadeus from "../../Services/Amadeus/Amadeus.js";

let responsse;
let brandedFlight;
let oderId;

const searchFlights = async (req, res) => {
  try {
    const {
      origin,
      destination,
      departureDate,
      returnDate,
      flightType,
      seatClass,
      passengers,
    } = await req.body;
    console.log("form data recieved", req.body);
    if (
      !origin ||
      !destination ||
      !departureDate ||
      !passengers ||
      !seatClass
    ) {
      return res
        .status(400)
        .json({ message: "Missing required fields in request." });
    } else {
      console.log(req.body);
    }

    const originCode = origin?.split(",")[0]?.trim();
    const destinationCode = destination?.split(",")[0]?.trim();
    console.log(originCode, destinationCode);

    // const origin = "EBB";
    // const destination ="DXB";
    // const departureDate ='2025-06-08';
    // const returnDate = '2025-06-15';
    // const adult = 1;

    const response = await amadeus.shopping.flightOffersSearch.get({
      originLocationCode: originCode,
      destinationLocationCode: destinationCode,
      departureDate: departureDate?.slice(0, 10),
      returnDate: returnDate?.slice(0, 10),
      adults: passengers?.adults,
      children: passengers?.children,
      infants: passengers?.infants,
      travelClass: seatClass,
      nonStop: false,
      currencyCode: "USD",
      // max: 100,
    });

    if (response.data.length === 0) {
      console.log("No flights available");
      return res.status(404).json({ message: "No flights available" });
    }
    responsse = response.data;
    console.log(`responess::`, responsse[3]);
    const limitedData = response.data.slice(0, 1);
    // console.log("LIMITED DATA ::", limitedData);

    return res.json(response.data);
  } catch (error) {
    console.error("Flight search error:", error);
    return res.status(500).json({
      message: "An error occurred while fetching flights",
      error: error.response?.data || error.message,
    });
  }
};
// my test version
// const searchFlights = async (req, res) => {
//   try {
//     const response = await amadeus.shopping.flightOffersSearch.get({
//       originLocationCode: "NYC",
//       destinationLocationCode: "LAX",
//       departureDate: "2026-03-01",
//       returnDate: "2026-03-01",
//       adults: 1,
//     });
//       return res.status(200).json({
//       status: "success",
//       data: response.data,
//       meta: response.meta || {},
//       timestamp: new Date().toISOString(),
//     });
//   } catch (error) {
//     console.error("API Status check error:", error);

//     // Check if it's a ClientError from Amadeus
//     if (error.code === "ClientError" && error.response) {
//       return res.status(error.response.statusCode || 503).json({
//         status: "error",
//         message: "Amadeus API is DOWN again",
//         errorType: "ClientError",
//         error: error.response.result?.errors || error.response.body,
//         timestamp: new Date().toISOString(),
//       });
//     }

//     return res.status(503).json({
//       status: "error",
//       message: "Unable to connect to Amadeus API",
//       error: error.message,
//       timestamp: new Date().toISOString(),
//     });
//   }
// };

const brandedUpSell = async (req, res) => {
  // console.log(req.session);
  // console.log(req.sessionID);
  const selectedFlight = req.body;
  console.log("selectedFlight received:", selectedFlight);

  // res.json({
  //   success:true,
  //   message:"route is working"
  // })

  try {
    const response = await amadeus.shopping.flightOffers.upselling.post({
      data: {
        type: "flight-offers-upselling",
        flightOffers: [selectedFlight], // Use selectedFlight, not responsse
        include: ["bags"],
        payments: [
          {
            brand: "VISA_IXARIS",
            binNumber: 123456,
            flightOfferIds: [selectedFlight.id], // You might want to make this dynamic
          },
        ],
      },
      params: {
        include: "detailed-fare-rules",
      },
    });

    if (!response.data || response.data.length === 0) {
      return res.send("No data available");
    }

    console.log("brandedFlight", response.data);
    return res.json(response.data);
  } catch (err) {
    console.error("Error getting branded flights:", err);
    const statusCode = err.response?.status || 500;
    return res
      .status(statusCode)
      .json({ message: err.description || err.message });
  }
};

//   find out the latest price for a flight selected

const findLastPrice = async (req, res) => {
  const response = req.body;
  console.log("findLastPrice", response);
  try {
    const pricingResponse = await amadeus.shopping.flightOffers.pricing.post(
      {
        data: {
          type: "flight-offers-pricing",
          flightOffers: [response.bookedFlight],
        },
      },
      {
        include: "bags",
      },
    );

    console.log("responce from server", pricingResponse.data);
    return res.json(pricingResponse.data);
  } catch (err) {
    console.error("Error fetching last price:", err);
    return res.json(err);
    //   res.status(500).json({
    //     error: "Error fetching final flight price",
    //     details: err.description || err.message || "Unknown error",
    //   });
  }
};

// Flight Offers Price with additional parameters
// for example: check additional baggage options

// amadeus.shopping.flightOffers.pricing.post(body ,{include: 'bags'});

const bookFlight = async (req, res) => {
  const { formData, bookedFlight } = req.body;
  const {DOB,docExpiryDate,docIssueDate,docNumber,docType,email,fName,gender,lName,nationality,phone} = formData;
  const number = phone?.slice(4);
  const code = phone?.slice(1,4);
  console.log("formData",formData);
  console.log("bookedFlight", bookedFlight[0]);
  //   res.json({
  //   success:true,
  //   message:"route is working"
  // })

//  try {
//   // Clean and parse phone
//   const parsePhone = (phone) => {
//     const cleaned = phone.replace(/[\s\-\+]/g, '');
//     return {
//       countryCallingCode: cleaned.substring(0, 3),
//       number: cleaned.substring(3)
//     };
//   };

//   const { countryCallingCode, number } = parsePhone(phone);

//   // Clean names
//   const cleanName = (name) => {
//     return name.trim().toUpperCase().replace(/[^A-Z\s]/g, '').replace(/\s+/g, ' ');
//   };

//   // Log data before sending (for debugging)
//   const travelerData = {
//     id: "1",
//     dateOfBirth: DOB,
//     name: {
//       firstName: cleanName(fName),
//       lastName: cleanName(lName),
//     },
//     gender: gender.toUpperCase(),
//     contact: {
//       emailAddress: email.trim().toLowerCase(),
//       phones: [
//         {
//           deviceType: "MOBILE",
//           countryCallingCode: countryCallingCode,
//           number: number,
//         },
//       ],
//     },
//     documents: [
//       {
//         documentType: docType.toUpperCase(),
//         birthPlace: "Kampala", // You need to add this to your form
//         issuanceLocation: "Kampala", // You need to add this to your form
//         issuanceDate: docIssueDate,
//         number: docNumber.toUpperCase().replace(/\s/g, ''),
//         expiryDate: docExpiryDate,
//         issuanceCountry: nationality.toUpperCase(),
//         validityCountry: nationality.toUpperCase(),
//         nationality: nationality.toUpperCase(),
//         holder: true,
//       },
//     ],
//   };

//   console.log("Traveler data being sent:", JSON.stringify(travelerData, null, 2));

//   const response = await amadeus.booking.flightOrders.post({
//     data: {
//       type: "flight-order",
//       flightOffers: [bookedFlight],
//       travelers: [travelerData],
//     },
//   });

//   console.log("Booking successful:", response.data);
//   const orderId = response.data.id;
//   return res.json(response.data);

// } catch (error) {
//   // Log full error details
//   console.error("Full error:", JSON.stringify(error.response?.data, null, 2));
//   console.error("Error description:", error.description);
  
//   return res.status(400).json({
//     error: "Booking failed",
//     details: error.response?.data?.errors || error.description || error.message
//   });
// }
};

//use api to retrieve order using the order ID
const retriveOrder = async (req, res) => {
  // console.log(oderId);
  const { orderID } = req.body;
  //     res.json({
  //   success:true,
  //   message:"route is working",
  //   data:orderID
  // })
  try {
    const response = await amadeus.booking.flightOrder(orderID).get();
    console.log(response.data);
    return res.json(response.data);
  } catch (err) {
    console.error("Error retrieving order:", err);
    return res.status(500).json({
      error: "Failed to retrieve order",
      details: err.description || err.message || "Unknown error",
    });
  }
};

//
const deleteOrder = async (req, res) => {
  const { orderID } = req.body;
  try {
    const response = await amadeus.booking.flightOrder(orderID).delete();
    console.log(response.data);
    return res.json(response.data);
  } catch (err) {
    console.error("Error retrieving order:", err);
    return res.status(500).json({
      error: "Failed to retrieve order",
      details: err.description || err.message || "Unknown error",
    });
  }
};

// SeatMap display
const seatMap = async (req, res) => {
  const { orderID } = req.body;
  try {
    const response = await amadeus.shopping.seatmaps.get({
      "flight-orderId": orderID,
    });

    console.log("Seat Map Response:", response.data);
    return res.json(response.data);
  } catch (err) {
    console.error("Error retrieving seat map:", err);
    return res.status(500).json({
      error: "Failed to retrieve seat map",
      details: err.description || err.message || "Unknown error",
    });
  }
};

//   find cheapest dates for given flight
//  not working
const cheapestDate = async (req, res) => {
  try {
    const response = await amadeus.shopping.flightDates.get({
      origin: "NYC", // Madrid
      destination: "CDG", // Munich
    });

    if (!response.data || response.data.length === 0) {
      console.log("No data received for cheapest flight dates");
      return res
        .status(404)
        .json({ message: "No cheap dates found for the given route" });
    }

    return res.json(response.data);
  } catch (err) {
    console.error("Error getting cheapest flight dates:", err);
    return res.status(500).json({
      message: "Failed to fetch cheapest flight dates",
      error: err.description || err.message,
    });
  }
};

// works
// find checkin links for different airlines
const getCheckIn = async (req, res) => {
  const checkIn = "KQ";
  try {
    const response = await amadeus.referenceData.urls.checkinLinks.get({
      airlineCode: checkIn,
    });
    if (response.data.length === 0) {
      return res.send("No check-in links available");
    } else {
      return res.json(response.data);
    }
  } catch (err) {
    console.log("Error getting check-ins:", err);
    return res.status(500).json({ message: "Error fetching check-in links" });
  }
};

const checkApiStatus = async (req, res) => {
  try {
    // Simple API health check using airline code lookup
    const response = await amadeus.referenceData.airlines.get({
      airlineCodes: "BA",
    });

    return res.status(200).json({
      status: "operational",
      message: "Amadeus API is working correctly",
      timestamp: new Date().toISOString(),
      data: response.data,
    });
  } catch (error) {
    console.error("API Status check error:", error);

    // Check if it's a ClientError from Amadeus
    if (error.code === "ClientError" && error.response) {
      return res.status(error.response.statusCode || 503).json({
        status: "error",
        message: "Amadeus API is experiencing issues",
        errorType: "ClientError",
        error: error.response.result?.errors || error.response.body,
        timestamp: new Date().toISOString(),
      });
    }

    return res.status(503).json({
      status: "error",
      message: "Unable to connect to Amadeus API",
      error: error.message,
      timestamp: new Date().toISOString(),
    });
  }
};
const flightDelayPrediction = async (req, res) => {
  // const { flightNumber, departureDate } = req.body;

  try {
    const response = await amadeus.travel.predictions.flightDelay.get({
      originLocationCode: "EBB",
      destinationLocationCode: "DOH",
      departureDate: "2026-06-08",
      departureTime: "01:35:00",
      arrivalDate: "2026-06-08",
      arrivalTime: "06:40:00",
      aircraftCode: "788",
      carrierCode: "QR",
      flightNumber: "1392",
      duration: "PT5H5M",
    });
    res.json(response.data);
  } catch (err) {
    console.error("Error fetching flight delay prediction:", err);
    return res.status(500).json({
      message: "Failed to fetch flight delay prediction",
      error: err.description || err.message,
    });
  }
};
export {
  searchFlights,
  getCheckIn,
  brandedUpSell,
  findLastPrice,
  bookFlight,
  cheapestDate,
  retriveOrder,
  deleteOrder,
  flightDelayPrediction,
  seatMap,
  checkApiStatus,
};

// conso-lidator
// test data
  // const response = await amadeus.booking.flightOrders.post({
  //     data: {
  //       type: "flight-order",
  //       flightOffers: [bookedFlight],
  //       travelers: [
  //         {
  //           id: "1",
  //           dateOfBirth: "1999-11-11", //YYY-MMM-DDD
  //           name: {
  //             firstName: "JORGE",
  //             lastName: "GONZALES",
  //           },
  //           gender: "MALE",
  //           contact: {
  //             emailAddress: "jorge.gonzales833@telefonica.es",
  //             phones: [
  //               {
  //                 deviceType: "MOBILE",
  //                 countryCallingCode: "256",
  //                 number: "781372789",
  //               },
  //             ],
  //           },
  //           documents: [
  //             {
  //               documentType: "PASSPORT",
  //               birthPlace: "Madrid",
  //               issuanceLocation: "Madrid",
  //               issuanceDate: "2020-04-14",
  //               number: "00000000",
  //               expiryDate: "2076-04-14",
  //               issuanceCountry: "UG",
  //               validityCountry: "UG",
  //               nationality: "UG",
  //               holder: true,
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   });