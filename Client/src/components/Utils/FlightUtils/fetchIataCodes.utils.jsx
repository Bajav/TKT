import axios from "axios";

export const fetchFlightMeta = async () => {
  try {
    const [iataRes, airlineRes] = await Promise.all([
      axios.get("http://localhost:3000/iataCodes"),
      axios.get("http://localhost:3000/airlines"),
    ]);

    return {
      iataCodes: iataRes.data,
      airlineData: airlineRes.data,
    };
  } catch (error) {
    console.error("Error fetching flight meta data:", error);
    throw error;
  }
};
