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
