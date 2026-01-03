import axios from "axios";
import { API_KEY,BASE_URL,getSignature } from "../../Config/HotelBeds/hotelbeds.config.js";

export async function searchHotels(payload) {
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
}
export async function getHotelContents(hotelCodes) {
  // hotelCodes = ["12345", "67890"]
  const response = await axios.get(
    `${BASE_URL}/hotel-content-api/1.0/hotels`,
    {
      params: {
        hotelCodes: hotelCodes.join(","), 
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
}

export async function getBoards() {
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
}