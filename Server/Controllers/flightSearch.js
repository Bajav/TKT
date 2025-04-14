import amadeus from "../Services/Amadeus.js";


let responsse ;
const searchFlights = async (req, res) => {

  const origin = "EBB";
  const destination = "DXB";
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
      max: 40,
    });

    if (response.data.length === 0) {
      console.log("No flights available");
      return res.status(404).json({ message: "No flights available" });
    }
    responsse = response.data;
    console.log(`responess::`,responsse);
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
const getCheckIn = async (req, res) => { 
    const checkIn = "KQ";
    try {
      const response = await amadeus.referenceData.urls.checkinLinks.get({ airlineCode: checkIn });
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
  
export { searchFlights , getCheckIn};