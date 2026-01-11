import { getPlaceReviews } from "../../Services/OpenTripMap/opentripmap.service.js";

const fetchPlaceReviews = async (req, res) => {
  const {lat,lon} = req.body;
  try {
    const response = await getPlaceReviews(lat,lon);
    res.json({
      success: true,
      data: response,
      message: "successfully got hotel Reviews",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      data: err,
      message: "unable to  get hotel Reviews",
    });
  }
};

export default fetchPlaceReviews;
