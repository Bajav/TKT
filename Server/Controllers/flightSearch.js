import amadeus from "../Services/Amadeus.js";

let responsse;
let oderId;
const searchFlights = async (req, res) => {
  const origin = "EBB";
  const destination = "CDG";
  const seatClass = "ECONOMY";
  const departureDate = "2025-11-04";
  const returnDate = "2025-11-08";
  const adults = 1;
  const children = 0;
  const infants = 0;

  try {
    const response = await amadeus.shopping.flightOffersSearch.get({
      originLocationCode: origin,
      destinationLocationCode: destination,
      departureDate,
      returnDate,
      adults,
      children,
      infants,
      travelClass: seatClass,
      nonStop: false,
      currencyCode: "USD",
      max: 2,
    });

    if (response.data.length === 0) {
      console.log("No flights available");
      return res.status(404).json({ message: "No flights available" });
    }
    responsse = response.data;
    console.log(`responess::`, responsse[0]);
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

//   find out the latest price for a flight selected

const findLastPrice = async (req, res) => {
    try {
      // Assuming flight data is passed in the request body
    //   const flightOffer = req.body.flightOffer;
  
    //   if (!flightOffer) {
    //     return res.status(400).json({ error: "Missing flight offer data" });
    //   }
  console.log("responseee::", responsse[0]);
    const pricingResponse = await amadeus.shopping.flightOffers.pricing.post({
        data: {
          type: "flight-offers-pricing",
          flightOffers: [responsse[0]],
        },
      });
  
      return res.json(responsse[0]);
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
    try{
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
}catch(err){
  console.log("error getting pricing", err);
  return res.json(err);
  }
};


const retriveOrder = async (req,res)=>
  {
    console.log(oderId);
    try {
      const response = await amadeus.booking.flightOrder(orderId).get();
      console.log(response.data);
      return res.json(response.data);
    } catch (err) {
      console.error("Error retrieving order:", err);
      return res.status(500).json({
        error: "Failed to retrieve order",
        details: err.description || err.message || "Unknown error"
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
    return res
      .status(500)
      .json({
        message: "Failed to fetch cheapest flight dates",
        error: err.description || err.message,
      });
  }
};


export { searchFlights, getCheckIn, findLastPrice, getFlightOrder ,cheapestDate,retriveOrder};

// conso-lidator
