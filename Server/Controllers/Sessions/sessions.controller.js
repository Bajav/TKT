const setSession = (req, res) => {
  const body = req.body;

  // 1. Get existing or start empty
  let flightSearch = req.session.flightSearch || [];

  // 2. Add new if there's data
  if (body) {
    flightSearch.push(body);
  } else {
    return res.send("no body data");
  }

  // 3. Save updated version back
  req.session.flightSearch = flightSearch;

  console.log("Current searches:", flightSearch);
  console.log("Session ID:", req.sessionID);

  res.send("session updated - added new search");
};

const getFlightSession = (req, res) => {
  if(!req.session.flightSearch){
    res.json({
        success: false,
        message:"no recent searches",
    });
  }else{
      res.json({
        success: false,
        message:"no recent searches",
        data: req.session.flightSearch,
    });
  }
};

export { setSession, getFlightSession };
