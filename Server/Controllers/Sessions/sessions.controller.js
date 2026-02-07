const setSession = (req, res) => {
  try {
    const searchData = req.body;

    // Validation...
    if (!searchData.originLocationCode || !searchData.destinationLocationCode) {
      return res.status(400).json({
        success: false,
        message: "Missing required search parameters",
      });
    }

    // Initialize session array if it doesn't exist
    if (!req.session.flightSearchHistory) {
      req.session.flightSearchHistory = [];
    }

    // Check for duplicate
    const isDuplicate = req.session.flightSearchHistory.some(
      (search) =>
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
        data: req.session.flightSearchHistory,
      });
    }

    const searchWithTimestamp = {
      ...searchData,
      timestamp: new Date().toISOString(),
    };

    // Add to beginning of array
    req.session.flightSearchHistory.unshift(searchWithTimestamp);

    // Keep only last 10 searches
    if (req.session.flightSearchHistory.length > 10) {
      req.session.flightSearchHistory = req.session.flightSearchHistory.slice(0, 10);
    }

    // CRITICAL FIX: Explicitly save the session
    req.session.save((err) => {
      if (err) {
        console.error("Session save error:", err);
        return res.status(500).json({
          success: false,
          message: "Error saving session",
          error: err.message,
        });
      }

      console.log("Session saved successfully:", req.session.flightSearchHistory);
      
      return res.status(200).json({
        success: true,
        message: "Search added to history",
        data: searchWithTimestamp,
        historyCount: req.session.flightSearchHistory.length,
        allHistory: req.session.flightSearchHistory,
      });
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
    console.log("Session ID:", req.sessionID);
    console.log("Session data:", req.session);
    
    const history = req.session.flightSearchHistory || [];

    return res.status(200).json({
      success: true,
      message:
        history.length > 0
          ? `Found ${history.length} recent search${history.length > 1 ? "es" : ""}`
          : "No recent searches",
      data: history,
      count: history.length,
      sessionId: req.sessionID, // For debugging
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