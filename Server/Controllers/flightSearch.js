import amadeus from "../Services/Amadeus.js";

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
    console.log("form data recieved",req.body);
    // console.log("passengers",passengers);

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

    const originCode = origin.split(",")[0].trim();
    const destinationCode = destination.split(",")[0].trim();
    console.log(originCode, destinationCode);

    // const origin = "EBB";
    // const destination ="DXB";
    // const departureDate ='2025-06-08';
    // const returnDate = '2025-06-15';
    // const adult = 1;

    const response = await amadeus.shopping.flightOffersSearch.get({
      originLocationCode: originCode,
      destinationLocationCode: destinationCode,
      departureDate: departureDate,
      returnDate: returnDate,
      adults: passengers.adults,
      children: passengers.children,
      infants: passengers.infants,
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


const brandedUpSell = async (req, res) => {
  const selectedFlight = req.body;
  console.log("selectedFlight received:", selectedFlight.id);

  try {
    const response = await amadeus.shopping.flightOffers.upselling.post({
      data: {
        type: "flight-offers-upselling",
        flightOffers: [selectedFlight],  // Use selectedFlight, not responsse
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
    return res.status(statusCode).json({ message: err.description || err.message });
  }
};

//   find out the latest price for a flight selected

const findLastPrice = async (req, res) => {
  const response = req.body;
  console.log("findLastPrice",response.bookedFlight);
  try {
    const pricingResponse = await amadeus.shopping.flightOffers.pricing.post({
      data: {
        type: "flight-offers-pricing",
        flightOffers: [response.bookedFlight],
      },
      params: {
        include: ["bags","detailed-fare-rules"]
      },
    });

    console.log("responce from server",pricingResponse.data)
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

// Flight Create Orders
// To book the flight-offer(s) returned by the Flight Offers Price
// and create a flight-order with travelers' information.
// A full example can be found at https://git.io/JtnYo

const getFlightOrder = async (req, res) => {
  try {
    const response = await amadeus.booking.flightOrders.post({
      data: {
        type: "flight-order",
        flightOffers: [responsse[1]],
        travelers: [
          {
            id: "1",
            dateOfBirth: "1999-11-11", //YYY-MMM-DDD
            name: {
              firstName: "JORGE",
              lastName: "GONZALES",
            },
            gender: "MALE",
            contact: {
              emailAddress: "jorge.gonzales833@telefonica.es",
              phones: [
                {
                  deviceType: "MOBILE",
                  countryCallingCode: "256",
                  number: "480080076",
                },
              ],
            },
            documents: [
              {
                documentType: "PASSPORT",
                birthPlace: "Madrid",
                issuanceLocation: "Madrid",
                issuanceDate: "2020-04-14",
                number: "00000000",
                expiryDate: "2076-04-14",
                issuanceCountry: "UG",
                validityCountry: "UG",
                nationality: "UG",
                holder: true,
              },
            ],
          },
        ],
      },
    });
    oderId = response.data.id;
    return res.json(response.data);
  } catch (err) {
    console.log("error getting pricing", err);
    return res.json(err);
  }
};

//use api to retrieve order using the order ID
const retriveOrder = async (req, res) => {
  console.log(oderId);
  try {
    const response = await amadeus.booking.flightOrder(oderId).get();
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
  console.log(oderId);
  try {
    const response = await amadeus.booking.flightOrder(oderId).delete();
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
  console.log(oderId);
  try {
    const response = await amadeus.shopping.seatmaps.get({
      "flight-orderId": oderId,
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

export {
  searchFlights,
  getCheckIn,
  brandedUpSell,
  findLastPrice,
  getFlightOrder,
  cheapestDate,
  retriveOrder,
  deleteOrder,
  seatMap,
};

// conso-lidator
