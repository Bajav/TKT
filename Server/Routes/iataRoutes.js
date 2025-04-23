import express from "express";
import { fetchAirlines,fetchIataCodes } from "../Controllers/iataController";

const router = express.Router();

router.get("/iata-codes", async (req, res) => {
  try {
    const data = await fetchIataCodes();
    res.json(data);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching IATA codes." });
  }
});

router.get("/airlines", async (req, res) => {
  try {
    const data = await fetchAirlines();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching airlines." });
  }
});

export default router;