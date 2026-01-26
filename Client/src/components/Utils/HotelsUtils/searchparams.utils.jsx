// utils/searchParamsHelper.js
export const extractSearchParams = (searchParams) => {
  return {
    accommodationType: searchParams.get("accommodationType"),
    destination: searchParams.get("destination"),
    dates: {
      checkIn: searchParams.get("checkIn"),
      checkOut: searchParams.get("checkOut"),
    },
    guests: {
      adults: Number(searchParams.get("adults")) || 0,
      children: Number(searchParams.get("children")) || 0,
      infants: Number(searchParams.get("infants")) || 0,
    },
    rooms: Number(searchParams.get("rooms")) || 0,
  };
};

