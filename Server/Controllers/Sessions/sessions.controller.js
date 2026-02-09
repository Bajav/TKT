const saveuserdata = (req, res) => {
  let { flightSearch, hotelSearch } = req.body;
  console.log(req.body);
  console.log("hotelSearch :::", hotelSearch);

  if (flightSearch) {
    if (!req.session.flightSearch) {
      req.session.flightSearch = [];
    }
    //   // Check for duplicate
    const isDuplicate = req.session.flightSearch.some(
      (search) =>
        search.origin === flightSearch.origin &&
        search.destination === flightSearch.destination &&
        search.flightType === flightSearch.flightType,
    );
    if (isDuplicate) {
      return res.status(200).json({
        success: true,
        message: "Search already in history",
        duplicate: true,
        data: req.session.flightSearch,
      });
    }
    req.session.flightSearch.unshift(flightSearch);
    return res.status(200).json({
      success: true,
      message: "flight search payload saved to collection",
      data: req.session.flightSearch,
    });
  } else if (hotelSearch) {
      if (!req.session.hotelSearch) {
        req.session.hotelSearch = [];
        console.log("debug",req.session.hotelSearch);
      }
        // Check for duplicate
      const isDuplicate = req.session.hotelSearch.some(
        (search) =>
          search.accommodationType === hotelSearch.accommodationType &&
          search.destination === hotelSearch.destination &&
          search.dates.checkIn === hotelSearch.dates.checkIn &&
          search.dates.checkOut === hotelSearch.dates.checkOut &&
          search.rooms === hotelSearch.rooms,
      );
      if (isDuplicate) {
        return res.status(200).json({
          success: true,
          message: "Search already in history",
          duplicate: true,
          data: req.session.hotelSearch,
        });
      }
      req.session.hotelSearch.unshift(hotelSearch);
      return res.status(200).json({
        success: true,
        message: "hotel search payload saved to collection",
        data: req.session.hotelSearch,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Missing required hotel parameters",
      });
    }
  };
const checkSession = (req, res) => {
  res.json({
    data: req.session,
    sessionId: req.session.id,
  });
};

export { saveuserdata, checkSession };

// "user":{
//   "username":"balijawa hussein",
//   "email":"balijawahussein@gmail.com"
// }
// to verify if session has user Object
// if(req.session.user){
//   req.session.flightSearch.unshift(flightSearch);
// }else{
//     return res.status(200).json({
//   success: false,
//   message: "please verify user to continue with booking",
//   data:flightSearch,
// });
// }
