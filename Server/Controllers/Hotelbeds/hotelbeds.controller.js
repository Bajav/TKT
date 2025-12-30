import { searchHotels } from "../../Services/Hotelbeds/hotelbeds.service.js";

const hotelSearch = async (req, res) => {
  const bodyData = req.body;
  console.log(bodyData);
  //   res.send("route is working");
  try {
    const response = await searchHotels({
      stay: {
        checkIn: "2026-02-10",
        checkOut: "2026-02-12",
      },
      occupancies: [
        {
          rooms: 1,
          adults: 2,
          children: 0,
        },
      ],
      destination: {
        code: "LON",
      },
      filter:{
        maxHotels:1
      }
    });
    // console.log("hotel response", response);
    res.json(response);
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      success: false,
      error: "HOTEL_SEARCH_FAILED",
      message: err.message,
    });
  }
};

export { hotelSearch };
