const setSession = (req, res) => {
  try {
    const searchData = req.body;

    // Validation...

    if (!req.session.flightSearchHistory) {
      req.session.flightSearchHistory = [];
    }

    // Check for duplicate
    const isDuplicate = req.session.flightSearchHistory.some(search => 
      search.originLocationCode === searchData.originLocationCode &&
      search.destinationLocationCode === searchData.destinationLocationCode &&
      search.departureDate === searchData.departureDate &&
      search.adults === searchData.adults
    );

    if (isDuplicate) {
      return res.status(200).json({
        success: true,
        message: "Search already in history",
        duplicate: true,
      });
    }

    const searchWithTimestamp = {
      ...searchData,
      timestamp: new Date().toISOString(),
    };

    req.session.flightSearchHistory.unshift(searchWithTimestamp);

    if (req.session.flightSearchHistory.length > 10) {
      req.session.flightSearchHistory = req.session.flightSearchHistory.slice(0, 10);
    }

    return res.status(200).json({
      success: true,
      message: "Search added to history",
      data: searchWithTimestamp,
      historyCount: req.session.flightSearchHistory.length,
    });

  } catch (error) {
    console.error("Error saving to session:", error);
    return res.status(500).json({
      success: false,
      message: "Error saving search to session",
      error: error.message,
    });
  }
};

const getFlightSession = (req, res) => {
  try {
    const history = req.session.flightSearchHistory || [];

    return res.status(200).json({
      success: true,
      message:
        history.length > 0
          ? `Found ${history.length} recent search${history.length > 1 ? "es" : ""}`
          : "No recent searches",
      data: history,
      count: history.length,
    });
  } catch (error) {
    console.error("Error fetching search history:", error);
    return res.status(500).json({
      success: false,
      message: "Error retrieving search history",
      error: error.message,
    });
  }
};

export { setSession, getFlightSession };
