import {
  searchHotels,
  checkRates,
  getHotelContents,
  getBoards,
  getAccomodations,
  typeHandler,
  getHotelData,
  getHotelComments,
  getRateComments,
  booking,
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
        code: "NYC",
      },
      // filter: {
      //   maxHotels: 200,
      // },
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

const hotelAvailbility = async (req, res) => {
  const bodyData = req.body;
  console.log(bodyData);
  //   res.send("route is working");
  try {
    const response = await searchHotels(bodyData);
    res.json(response);
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({
      success: false,
      error: "HOTEL_AVAILABILITY HAS FAILED",
      message: err.message,
    });
  }
};

const bookHotel = async (req, res) => {
  const bodyData = req.body;
  console.log(bodyData);
  //   res.send("route is working");
  try {
    const response = await booking(req.body);
    res.json(response);
  } catch (err) {
    // console.log(err);
    return res.status(400).json({
      success: false,
      error: "HOTEL_BOOKING_HAS_FAILED",
      message: err,
    });
  }
};


const hotelRates = async (req, res) => {
  const {rooms} = req.body;
  // console.log(rooms);
  //   res.send("route is working");
  try {
    const response = await checkRates({rooms});
    // console.log("hotel response", response);
    res.json(response);
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      success: false,
      error: "HOTEL_RATES_FAILED",
      message: err.message,
    });
  }
};



//CONTENTS 

const hotelContents = async (req, res) => {
  const { hotelCodes } = req.body;
  // console.log(hotelCodes);
  // res.json({
  //   success:true,
  //   message:"its working",
  //   data:hotelCodes
  // });
  try {
    if (!hotelCodes || hotelCodes.length === 0) {
      return res.status(400).json({
        success: false,
        error: "HOTEL_CODES_REQUIRED",
        message: "Hotel codes are required to fetch hotel contents",
      });
    }

    const response = await getHotelContents(hotelCodes);
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

const findBoards = async (req, res) => {
  try {
    const boards = await getBoards();
    res.json({
      success: true,
      message: "baords working",
      data: boards,
    });
  } catch (err) {
    res.json({ success: false, message: "error getting boards", data: err });
  }
};
const findAccomodation = async (req, res) => {
  try {
    const accomodations = await getAccomodations();
    res.json({
      success: true,
      message: "accomodations working",
      data: accomodations,
    });
  } catch (err) {
    res.json({ success: false, message: "error getting accomodations", data: err });
  }
};


const getFacilities = async (req, res) => {
  try {
    const facilities = await typeHandler("/facilities");
    res.json({
      success: true,
      message: "facilities working",
      data: facilities,
    });
  } catch (err) {
    res.json({
      success: false,
      message: "error getting facilities",
      data: err,
    });
  }
};

const getRooms = async (req, res) => {
  try {
    const rooms = await typeHandler("/rooms");
    res.json({
      success: true,
      message: "rooms working",
      data: rooms,
    });
  } catch (err) {
    res.json({ success: false, message: "error getting rooms", data: err });
  }
};

const hotelData = async (req, res) => {
  const { code } = req.body;
  console.log(code);
  console.log(req.body);
  try {
    const rooms = await getHotelData(code);
    console.log("successfully fetched hotel data");
    res.json({
      success: true,
      message: "hotel data is working",
      data: rooms,
    });
  } catch (err) {
    console.log("error fetching hotel data");
    res.json({
      success: false,
      message: "error getting hotel data",
      data: err,
    });
  }
};

const hotelComments = async (req, res) => {
  const {rateCommentsId}  = req.body;
  console.log(rateCommentsId.split('|')[1]);
  try {
    const rateComments = await getHotelComments(rateCommentsId.split('|')[1]);
    res.json({
      success: true,
      message: "hotel rateComments is working",
      data: rateComments,
    });
  } catch (err) {
    res.json({
      success: false,
      message: "error getting hotel rateComments",
      data: err,
    });
  }
};

const rateComments = async (req, res) => {
  // const {rateCommentsId}  = req.body;
  // console.log(rateCommentsId.split('|')[1]);
  try {
    // const rateComments = await getRateComments(rateCommentsId.split('|')[1]);
    const rateComments = await getRateComments(59093);
    res.json({
      success: true,
      message: "hotel rateComments is working",
      data: rateComments,
    });
  } catch (err) {
    res.json({
      success: false,
      message: `status code ${err.status}  ${err.message}`,
      data: err,
    });
  }
};

const promotions = async (req, res) => {

  try {
    // const rateComments = await getRateComments(rateCommentsId.split('|')[1]);
    const prmos = await typeHandler("/promotions");
    res.json({
      success: true,
      message: "hotel promotions is working",
      data: prmos,
    });
  } catch (err) {
    res.json({
      success: false,
      message: `status code ${err.status}  ${err.message}`,
      data: err,
    });
  }
};

const terminals = async (req, res) => {

  try {
    // const rateComments = await getRateComments(rateCommentsId.split('|')[1]);
    const terminals = await typeHandler("/terminals");
    res.json({
      success: true,
      message: "hotel terminals is working",
      data: terminals,
    });
  } catch (err) {
    res.json({
      success: false,
      message: `status code ${err.status}  ${err.message}`,
      data: err,
    });
  }
};
export {
  hotelSearch,
  hotelContents,
  rateComments,
  findBoards,
  findAccomodation,
  getFacilities,
  getRooms,
  hotelData,
  hotelComments,
  promotions,
  terminals,
  hotelRates,
  hotelAvailbility,
  bookHotel,
};
