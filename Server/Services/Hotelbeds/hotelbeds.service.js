import axios from "axios";
import {
  API_KEY,
  BASE_URL,
  getSignature,
} from "../../Config/HotelBeds/hotelbeds.config.js";

// Helper function for error handling
const handleHotelBedsError = (error, operation) => {
  if (error.response) {
    // HotelBeds API returned an error response
    console.error(`HotelBeds ${operation} Error:`, JSON.stringify(error.response.data, null, 2));
    throw {
      operation,
      status: error.response.status,
      error: error.response.data,
      message: error.response.data?.error?.message || "HotelBeds API Error",
    };
  } else if (error.request) {
    // Request was made but no response received
    console.error(`${operation} - No response from HotelBeds:`, error.message);
    throw {
      operation,
      message: "No response from HotelBeds API. Please check your connection.",
      originalError: error.message,
    };
  } else {
    // Something else happened
    console.error(`${operation} - Error:`, error.message);
    throw {
      operation,
      message: "An unexpected error occurred",
      originalError: error.message,
    };
  }
};

// availablity
export async function searchHotels(payload) {
  try {
    const response = await axios.post(
      `${BASE_URL}/hotel-api/1.0/hotels`,
      payload,
      {
        headers: {
          "Api-key": API_KEY,
          "X-Signature": getSignature(),
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    handleHotelBedsError(error, "Search Hotels");
  }
}

// check for hotelRates
export async function checkRates(payload) {
  try {
    const response = await axios.post(
      `${BASE_URL}/hotel-api/1.0/checkrates`,
      payload,
      {
        headers: {
          "Api-key": API_KEY,
          "X-Signature": getSignature(),
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        params: {
          language: "ENG",
        },
      }
    );
    return response.data;
    console.log("no data recieved")
  } catch (error) {
    handleHotelBedsError(error, "Check Rates");
  }
}

// booking
export async function booking(payload) {
  try {
    const response = await axios.post(
      `https://api-secure.test.hotelbeds.com/hotel-api/1.0/bookings`,
      payload,
      {
        headers: {
          "Api-key": API_KEY,
          "X-Signature": getSignature(),
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        params: {
          language: "ENG",
        },
      }
    );
    return response.data;
  } catch (error) {
    handleHotelBedsError(error, "Booking");
  }
}

export async function getHotelContents(hotelCodes) {
  try {
    // Validate input
    if (!hotelCodes || !Array.isArray(hotelCodes) || hotelCodes.length === 0) {
      throw new Error("hotelCodes must be a non-empty array");
    }

    const response = await axios.get(`${BASE_URL}/hotel-content-api/1.0/hotels`, {
      params: {
        hotelCodes: hotelCodes.join(","),
        language: "ENG",
      },
      headers: {
        "Api-key": API_KEY,
        "X-Signature": getSignature(),
        Accept: "application/json",
      },
    });
    return response.data;
  } catch (error) {
    if (error.message === "hotelCodes must be a non-empty array") {
      throw error;
    }
    handleHotelBedsError(error, "Get Hotel Contents");
  }
}

export async function getBoards() {
  try {
    const response = await axios.get(
      `${BASE_URL}/hotel-content-api/1.0/types/boards`,
      {
        params: {
          language: "ENG",
        },
        headers: {
          "Api-key": API_KEY,
          "X-Signature": getSignature(),
          Accept: "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    handleHotelBedsError(error, "Get Boards");
  }
}

export async function getAccomodations() {
  try {
    const response = await axios.get(
      `${BASE_URL}/hotel-content-api/1.0/types/accommodations`,
      {
        params: {
          language: "ENG",
        },
        headers: {
          "Api-key": API_KEY,
          "X-Signature": getSignature(),
          Accept: "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    handleHotelBedsError(error, "Get Accommodations");
  }
}

export async function typeHandler(route) {
  try {
    // Validate route
    if (!route || typeof route !== "string") {
      throw new Error("Route parameter is required and must be a string");
    }

    const response = await axios.get(
      `${BASE_URL}/hotel-content-api/1.0/types${route}`,
      {
        params: {
          language: "ENG",
        },
        headers: {
          "Api-key": API_KEY,
          "X-Signature": getSignature(),
          Accept: "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error.message === "Route parameter is required and must be a string") {
      throw error;
    }
    handleHotelBedsError(error, "Type Handler");
  }
}

export async function getHotelData(hotelCode) {
  try {
    // Validate hotelCode
    if (!hotelCode) {
      throw new Error("hotelCode parameter is required");
    }

    const response = await axios.get(
      `${BASE_URL}/hotel-content-api/1.0/hotels/${hotelCode}/details`,
      {
        params: {
          language: "ENG",
        },
        headers: {
          "Api-key": API_KEY,
          "X-Signature": getSignature(),
          Accept: "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error.message === "hotelCode parameter is required") {
      throw error;
    }
    handleHotelBedsError(error, "Get Hotel Data");
  }
}

export async function getHotelComments(rateCommentsId) {
  try {
    // Validate rateCommentsId
    if (!rateCommentsId) {
      throw new Error("rateCommentsId parameter is required");
    }

    const response = await axios.get(
      `${BASE_URL}/hotel-content-api/1.0/ratecommentdetails?code=${rateCommentsId}&fields=all&language=ENG&from=1&to=100`,
      {
        params: {
          language: "ENG",
        },
        headers: {
          "Api-key": API_KEY,
          "X-Signature": getSignature(),
          Accept: "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error.message === "rateCommentsId parameter is required") {
      throw error;
    }
    handleHotelBedsError(error, "Get Hotel Comments");
  }
}

export async function getRateComments(rateCommentsId) {
  try {
    // Validate rateCommentsId
    if (!rateCommentsId) {
      throw new Error("rateCommentsId parameter is required");
    }

    const response = await axios.get(
      `${BASE_URL}/hotel-content-api/1.0/ratecomments?code=${rateCommentsId}&fields=all&language=ENG&from=1&to=100`,
      {
        params: {
          language: "ENG",
        },
        headers: {
          "Api-key": API_KEY,
          "X-Signature": getSignature(),
          Accept: "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error.message === "rateCommentsId parameter is required") {
      throw error;
    }
    handleHotelBedsError(error, "Get Rate Comments");
  }
}