import React, { useState, useEffect, useContext } from "react";
import { MapPin, Loader2, AlertCircle } from "lucide-react";
import { LocationContext } from "../context/location.context";
import "./location.styles.scss";

const LocationComponent = () => {
  const { userLocation, setLocation, error, setError, loading, setLoading } =
    useContext(LocationContext);

  const getCurrentLocation = () => {
    setLoading(true);
    setError(null);

    if (!navigator.geolocation) {
      setError("Geolocation is not supported by this browser");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;

          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10&addressdetails=1`
          );

          if (!response.ok) {
            throw new Error("Failed to fetch location data");
          }

          const data = await response.json();
          // Extract city and country from the response
          const address = data.address || {};
          const country = address.country || "Unknown Country";
          setLocation(address);
        } catch (err) {
          setError("Failed to get location details: " + err.message);
        } finally {
          setLoading(false);
        }
      },
      (err) => {
        let errorMessage = "Failed to get your location";

        switch (err.code) {
          case err.PERMISSION_DENIED:
            errorMessage = "Location access denied by user";
            break;
          case err.POSITION_UNAVAILABLE:
            errorMessage = "Location information unavailable";
            break;
          case err.TIMEOUT:
            errorMessage = "Location request timed out";
            break;
          default:
            errorMessage = "An unknown error occurred";
        }

        setError(errorMessage);
        setLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000, // 5 minutes
      }
    );
  };
  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div className="location-container">
      <h1>
        {userLocation?.city},{userLocation?.country || " "} 
      </h1>
    </div>
  );
};

export default LocationComponent;
