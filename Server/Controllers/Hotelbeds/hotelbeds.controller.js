import {
  searchHotels,
  getHotelContents,
  getBoards,
  getAccomodations
} from "../../Services/Hotelbeds/hotelbeds.service.js";

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
      filter: {
        maxHotels: 1,
      },
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

const hotelContents = async (req, res) => {
  const {hoteCodes} = req.body;
  // console.log(hoteCodes);
  // res.json({
  //   success:true,
  //   message:"its working",
  //   data:hoteCodes
  // });
  try {
    // hotelCodes = ["12345", "67890"]

    if (!hoteCodes || hoteCodes.length === 0) {
      return res.status(400).json({
        success: false,
        error: "HOTEL_CODES_REQUIRED",
        message: "Hotel codes are required to fetch hotel contents",
      });
    }

    const response = await getHotelContents(hoteCodes);

    res.json({
      success: true,
      data: response,
    });
  } catch (err) {
    console.error("HOTEL_CONTENT_ERROR:", err.message);

    return res.status(500).json({
      success: false,
      error: "HOTEL_CONTENT_FAILED",
      message: err.message,
    });
  }
};

const findBoards =async(req,res)=>
  {
    try{
      const boards = await getBoards();
      res.json({
        success:true,
        message:"baords working",
        data:boards
      })
    }catch(err){res.json({success:false,message:"error getting boards",
      data:err,
    })}
  }
  const findAccomodation =async(req,res)=>
  {
    try{
      const accomodations = await getAccomodations();
      res.json({
        success:true,
        message:"baords working",
        data:accomodations
      })
    }catch(err){res.json({success:false,message:"error getting boards",
      data:err,
    })}
  }
export { hotelSearch,hotelContents,findBoards,findAccomodation };
