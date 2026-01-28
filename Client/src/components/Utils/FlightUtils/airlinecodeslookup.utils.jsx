import { useContext } from "react";


export const airlinesLookUps = (airlineData = []) => {
  return airlineData.reduce((lookup, item) => {
    lookup[item.code] = {
      logo: item.logo,
      name: item.name,
    };
    return lookup;
  }, {});
};

export const iataLookups = (iataCodes = []) => {
  return iataCodes.reduce((lookup, item) => {
    lookup[item.AirportCode] = {
      city: item.City,
      country: item.Country,
    };
    return lookup;
  }, {});
};
