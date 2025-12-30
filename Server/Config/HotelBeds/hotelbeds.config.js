import crypto from "crypto";

const API_KEY = process.env.HOTELS_API_KEY;
const API_SECRET = process.env.HOTELS_SECRET_KEY;
const BASE_URL = "https://api.test.hotelbeds.com";

 const getSignature=()=> {
  const timestamp = Math.floor(Date.now() / 1000);
  const signature = crypto
    .createHash("sha256")
    .update(API_KEY + API_SECRET + timestamp)
    .digest("hex");

  return signature;
}

export { API_KEY, BASE_URL,getSignature };