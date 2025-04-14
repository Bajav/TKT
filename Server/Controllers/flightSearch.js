import amadeus from "../Services/Amadeus";

const searchFlights = async (req,res) => {
  const origin = "EBB";
  const destination = "DXB";
  const seatClass = "ECONOMY";
  const departureDate = "2025-11-04";
  const returnDate = "2025-11-08";
  const passengers = 1;
  const adults = 1;
  const infants = 0;
  const children = 0;
  try {
    const response = await amadeus.shopping.flightOffersSearch.get({
      originLocationCode: origin,
      destinationLocationCode: destination,
      departureDate: departureDate,
      returnDate:returnDate,
      adults: adults,
      children: children,
      infants: infants,
      travelClass:seatClass,
      nonStop:false,
      currencyCode:"USD",
      max:40
    });
    if(response.data.length === 0)
      {
        res.send("no flights available")
        console.log("no flights available");
      }else
      {
        res.send(response.data);
        flightOffersResponse = response.data;
        const limitedData = response.data.slice(0,1)
        console.log("LIMITED DATA ::" +" "+ limitedData);
      }
    // res.send(response.data);
  } catch (error) {
    console.error(error);
  }
};

export default searchFlights;