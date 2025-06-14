import React, { useState, useEffect } from 'react';
import { MapPin, Loader2, AlertCircle } from 'lucide-react';
import './location.styles.scss';

const LocationComponent = () => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getCurrentLocation = () => {
    setLoading(true);
    setError(null);
    
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by this browser');
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          console.log(`latitude :: ${latitude} while ${longitude}`)
          
          // Using OpenStreetMap's Nominatim API (free and no API key required)
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10&addressdetails=1`
          );
          
          if (!response.ok) {
            throw new Error('Failed to fetch location data');
          }
          
          const data = await response.json();
          
          // Extract city and country from the response
          const address = data.address || {};
          const city = address.city || 
                      address.town || 
                      address.village || 
                      address.municipality || 
                      address.county || 
                      'Unknown City';
          
          const country = address.country || 'Unknown Country';
          
          setLocation({
            city,
            country,
            latitude: latitude.toFixed(6),
            longitude: longitude.toFixed(6),
            fullAddress: data.display_name
          });
        } catch (err) {
          setError('Failed to get location details: ' + err.message);
        } finally {
          setLoading(false);
        }
      },
      (err) => {
        let errorMessage = 'Failed to get your location';
        
        switch (err.code) {
          case err.PERMISSION_DENIED:
            errorMessage = 'Location access denied by user';
            break;
          case err.POSITION_UNAVAILABLE:
            errorMessage = 'Location information unavailable';
            break;
          case err.TIMEOUT:
            errorMessage = 'Location request timed out';
            break;
          default:
            errorMessage = 'An unknown error occurred';
        }
        
        setError(errorMessage);
        setLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000 // 5 minutes
      }
    );
  };

  return (
    <div className="location-container">
      
      <div className="header">
        <h2 className="title">Your Location</h2>
        <p className="subtitle">Click the button to get your current location</p>
      </div>

      <div className="button-container">
        <button
          onClick={getCurrentLocation}
          disabled={loading}
          className="location-button"
        >
          {loading ? (
            <>
              <Loader2 className="button-icon spinner" />
              Getting Location...
            </>
          ) : (
            <>
              <MapPin className="button-icon" />
              Get My Location
            </>
          )}
        </button>
      </div>

      {error && (
        <div className="error-container">
          <div className="error-content">
            <AlertCircle className="error-icon" />
            <p className="error-text">{error}</p>
          </div>
        </div>
      )}

      {location && (
        <div className="location-results">
          <div className="success-container">
            <div className="success-header">
              <MapPin className="success-icon" />
              <h3 className="success-title">Location Found!</h3>
            </div>
            
            <div className="location-details">
              <div className="detail-row">
                <span className="detail-label">City:</span>
                <span className="detail-value">{location.city}</span>
              </div>
              
              <div className="detail-row">
                <span className="detail-label">Country:</span>
                <span className="detail-value">{location.country}</span>
              </div>
              
              <div className="detail-row">
                <span className="detail-label">Coordinates:</span>
                <span className="detail-value coordinates">
                  {location.latitude}, {location.longitude}
                </span>
              </div>
            </div>
          </div>
          
          <div className="address-container">
            <p className="address-label">Full Address:</p>
            <p className="address-text">{location.fullAddress}</p>
          </div>
        </div>
      )}

      <div className="footer">
        <p>Location data provided by OpenStreetMap Nominatim API</p>
        <p>Your location data is processed locally and not stored</p>
      </div>
    </div>
  );
};

export default LocationComponent;