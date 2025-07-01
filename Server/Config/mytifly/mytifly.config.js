import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const createMyFareBoxSession = () =>
  axios.post("https://restapidemo.myfarebox.com/api/CreateSession", {
    UserName: process.env.USERNAMEE,
    Password: process.env.PASSWORDS,
    AccountNumber: process.env.ACCOUNT_NUMBER,
  });