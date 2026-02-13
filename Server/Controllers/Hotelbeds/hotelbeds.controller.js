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
import { generateOTP } from "../../Services/NodeMailer/nodemailer.services.js";

const hotelSearch = async (req, res) => {
  const {formData} = req.body;
  console.log(formData);
  const {accommodationType,dates,destination,guests,rooms} = formData;
  const room = parseFloat(rooms);
  const location = destination?.slice(0,3);
    // res.send("route is working");
  try {
    const response = await searchHotels({
      stay: {
        checkIn: dates.checkIn,
        checkOut: dates.checkOut,
      },
      occupancies: [
        {
          rooms: room,
          adults: guests.adults,
          children: guests.children,
        },
      ],
      destination: {
        code: location,
      },
      // filter: {
      //   maxHotels: 200,
      // },
    });
    // console.log("hotel response", response);
    res.json(response);
  } catch (error) {
    return res.status(error.status || 500).json({
      success: false,
      error: error.operation || "OPERATION_FAILED",
      message: error.message || "An error occurred",
      details: error.error || null,
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
  } catch (error) {
    return res.status(error.status || 500).json({
      success: false,
      error: error.operation || "OPERATION_FAILED",
      message: error.message || "An error occurred",
      details: error.error || null,
    });
  }
};

// const bookHotel = async (req, res) => {
//   const bodyData = req.body;
//   const bookingData = {
//       holder: {
//         name: "Hussein",
//         surname: "Balijawa",
//       },
//       rooms: [
//         {
//           rateKey:
//             "20260210|20260212|W|254|107255|SUI.QN|BAR OPQ ALL|RO||1~2~0||N@07~~20017d~636141189~N~~~NOR~~FBE642056559404176815471437905AAUK0057000000000121a152",
//           paxes: [
//             {
//               roomId: 1,
//               type: "AD",
//               name: "Hussein",
//               surname: "Balijawa",
//             },
//             {
//               roomId: 1,
//               type: "AD",
//               name: "Allen",
//               surname: "Nakiwewa",
//             },
//           ],
//         },
//       ],
//       clientReference: "TKT-TEST",
//       remark: "Booking remarks if any",
//       tolerance: 2,
//     }
//   console.log("Request Body:", bodyData);
//   res.send("boking is working");

//   // try {
//   //   const response = await booking(bookingData);
//   //   res.json(response);
//   // } catch (error) {
//   //   return res.status(error.status || 500).json({
//   //     success: false,
//   //     error: error.operation || "OPERATION_FAILED",
//   //     message: error.message || "An error occurred",
//   //     details: error.error || null,
//   //   });
//   // }
// };
const initiateBooking = async (req, res) => {
  const { bookingData, userEmail, verified = false } = req.body;
  
  // Validate booking data
  if (!bookingData || !userEmail) {
    return res.status(400).json({ 
      success: false, 
      error: "Booking data and email required" 
    });
  }

  // Store booking data in session IMMEDIATELY
  req.session.pendingBooking = {
    bookingData,
    userEmail,
    createdAt: Date.now(),
    verified: false
  };

  // If already verified (returning user), skip OTP
  if (verified || req.session.user?.isVerified) {
    return res.json({
      success: true,
      message: "Proceed to payment/confirmation",
      requiresVerification: false,
      sessionId: req.sessionID
    });
  }

  // Need verification - send OTP
  try {
    const otp = generateOTP();
    
    otpStore.set(userEmail, {
      otp,
      expiresAt: Date.now() + 5 * 60 * 1000,
      sessionId: req.sessionID // Link OTP to session
    });

    await transporter.sendMail({
      from: '"tkt travel agency" <balijawahussein@gmail.com>',
      to: userEmail,
      subject: "Verify Your Email to Complete Booking",
      html: `
        <div style="font-family: roboto, monospace; max-width: 600px; margin: 0 auto;">
          <h2>Complete Your Hotel Booking</h2>
          <p>Your verification code is:</p>
          <h1 style="background: #f5f5f5; padding: 20px; text-align: center; letter-spacing: 5px;">
            ${otp}
          </h1>
          <p>This code will expire in 5 minutes.</p>
        </div>
      `,
    });

    res.json({
      success: true,
      message: "OTP sent. Please verify to complete booking.",
      requiresVerification: true,
      email: userEmail
    });

  } catch (error) {
    console.error("OTP send failed:", error);
    res.status(500).json({ 
      success: false, 
      error: "Failed to send verification code" 
    });
  }
};

const hotelRates = async (req, res) => {
  const { rate } = req.body;
  console.log(rate);
  // res.send("route is working");
  try {
    const response = await checkRates({
      rooms: [
        {
          rateKey: rate,
        },
      ],
    });
    // console.log("hotel response", response);
    res.json(response);
  } catch (error) {
    return res.status(error.status || 500).json({
      success: false,
      error: error.operation || "OPERATION_FAILED",
      message: error.message || "An error occurred",
      details: error.error || null,
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
  } catch (error) {
    return res.status(error.status || 500).json({
      success: false,
      error: error.operation || "OPERATION_FAILED",
      message: error.message || "An error occurred",
      details: error.error || null,
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
  } catch (error) {
    return res.status(error.status || 500).json({
      success: false,
      error: error.operation || "OPERATION_FAILED",
      message: error.message || "An error occurred",
      details: error.error || null,
    });
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
  } catch (error) {
    return res.status(error.status || 500).json({
      success: false,
      error: error.operation || "OPERATION_FAILED",
      message: error.message || "An error occurred",
      details: error.error || null,
    });
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
  } catch (error) {
    return res.status(error.status || 500).json({
      success: false,
      error: error.operation || "OPERATION_FAILED",
      message: error.message || "An error occurred",
      details: error.error || null,
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
  } catch (error) {
    return res.status(error.status || 500).json({
      success: false,
      error: error.operation || "OPERATION_FAILED",
      message: error.message || "An error occurred",
      details: error.error || null,
    });
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
  } catch (error) {
    return res.status(error.status || 500).json({
      success: false,
      error: error.operation || "OPERATION_FAILED",
      message: error.message || "An error occurred",
      details: error.error || null,
    });
  }
};

const hotelComments = async (req, res) => {
  const { rateCommentsId } = req.body;
  console.log(rateCommentsId.split("|")[1]);
  try {
    const rateComments = await getHotelComments(rateCommentsId.split("|")[1]);
    res.json({
      success: true,
      message: "hotel rateComments is working",
      data: rateComments,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      success: false,
      error: error.operation || "OPERATION_FAILED",
      message: error.message || "An error occurred",
      details: error.error || null,
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
  } catch (error) {
    return res.status(error.status || 500).json({
      success: false,
      error: error.operation || "OPERATION_FAILED",
      message: error.message || "An error occurred",
      details: error.error || null,
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
  } catch (error) {
    return res.status(error.status || 500).json({
      success: false,
      error: error.operation || "OPERATION_FAILED",
      message: error.message || "An error occurred",
      details: error.error || null,
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
  } catch (error) {
    console.error("Booking Error:", err);
    return res.status(error.status || 500).json({
      success: false,
      error: error.operation || "OPERATION_FAILED",
      message: error.message || "An error occurred",
      details: error.error || null,
    });
  }
};

const verifyEmail = async (req,res)=>
  {
    try{
        const {email} = req.body;
    res.json({
      success:true,
      data:email,
      message:"email is verified"
    });
    }catch(error){
      res.status(500).json({
        success:false,
        message:"internal server error"
      });
    }
  };
  // verify Otp
  const verifyOtp = async (req,res)=>
  {
    try{
      const {otp} = req.body;
    res.json({
      success:true,
      data:otp,
      message:"otp is verified"
    }); 
    }catch(error){
      res.status(500).json({
        success:false,
        message:"internal server error"
      });
    }
  }
export {
  hotelSearch,
  hotelContents,
  rateComments,
  findBoards,
  findAccomodation,
  getFacilities,
  getRooms,
  hotelData,
  verifyOtp,
  hotelComments,
  promotions,
  terminals,
  hotelRates,
  hotelAvailbility,
  initiateBooking,
  verifyEmail,
};
