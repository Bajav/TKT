import facilityIconMap from "./icons.utils";

const getFacilityDisplay = (description) => {
  if (!description) return null;

  const lower = description.toLowerCase();

  const match = Object.entries(facilityIconMap).find(([key]) =>
    lower.includes(key)
  );

  if (match) {
    const [, { icon: Icon, label, color }] = match;
    return { Icon, label, color };
  }

  return null;
};

/**
 * Reusable Facility List Component
 * @param {Object} props
 * @param {Array} props.facilities - array of hotel facilities
 * @param {number|number[]} [props.groupCodes] - one or more facilityGroupCode to show
 * @param {number} [props.limit] - max number of items to show (optional)
 * @param {string} [props.className] - additional class for the container
 */
export const FacilityList = ({
  facilities = [],
  groupCodes,
  limit,
  customFilter = () => true,
  className = "",
}) => {
  // Normalize groupCodes to array
  const allowedGroups = Array.isArray(groupCodes)
    ? groupCodes
    : groupCodes !== undefined
    ? [groupCodes]
    : null;

  const filtered = facilities.filter((f) => {
    if (!allowedGroups) return true;
    return allowedGroups.includes(f.facilityGroupCode);
  });

  const displayed = limit ? filtered.slice(0, limit) : filtered;

  if (displayed.length === 0) {
    return null;
  }

const isPaidFacility = (facility) => {
  // indFee is the primary indicator for extra charges
  if (facility.indFee === true) return true;
  
  // Optional: Check voucher only if you know it indicates payment
  // In some APIs, voucher means "requires prepaid voucher"
  // Comment this out if you're unsure
  // if (facility.voucher === true) return true;
  
  return false;
};

  // Format time from "07:00:00" to "7:00 AM"
  const formatTime = (time) => {
    if (!time) return null;
    
    const [hours, minutes] = time.split(":");
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? "PM" : "AM";
    const hour12 = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    
    return `${hour12}:${minutes} ${ampm}`;
  };

  // Format currency amount
  const formatAmount = (amount, currency) => {
    if (!amount) return null;
    
    const symbols = {
      USD: "$",
      EUR: "€",
      GBP: "£",
      JPY: "¥",
    };
    
    const symbol = symbols[currency] || currency;
    return `${symbol}${amount}`;
  };

  // NEW: Smart facility text builder
  const getFacilityText = (facility) => {
    const baseText = facility.description?.content || "";
    const parts = [baseText];
    const metadata = [];
    
    // Handle number (e.g., "1 Bathroom", "26 sqm")
    if (facility.number) {
      const lowerText = baseText.toLowerCase();
      
      if (lowerText.includes("room size") || lowerText.includes("sqm")) {
        return `room size ${facility.number} sqm`;
      } else if (lowerText.includes("bathroom")) {
        return `${facility.number} ${facility.number > 1 ? "Bathrooms" : "Bathroom"}`;
      } else if (lowerText.includes("bedroom")) {
        return `Number of bedrooms ${facility.number}`;
      } else if (lowerText.includes("floor")) {
        return `Floor ${facility.number}`;
      } else {
        parts[0] = `${facility.number} ${baseText}`;
      }
    }
    
    // Handle time range (e.g., "Breakfast: 7:00 AM - 10:00 AM")
    if (facility.timeFrom && facility.timeTo) {
      const from = formatTime(facility.timeFrom);
      const to = formatTime(facility.timeTo);
      metadata.push(`${from} - ${to}`);
    } else if (facility.timeTo) {
      // Only "to" time (e.g., "Check-out: 12:00 PM")
      const to = formatTime(facility.timeTo);
      metadata.push(`by ${to}`);
    } else if (facility.timeFrom) {
      // Only "from" time (e.g., "Check-in: from 3:00 PM")
      const from = formatTime(facility.timeFrom);
      metadata.push(`from ${from}`);
    }
    
    // Handle amount/price (e.g., "Small pets: £20")
    if (facility.amount && facility.currency) {
      const price = formatAmount(facility.amount, facility.currency);
      metadata.push(price);
    }
    
    // Handle applicationType if needed
    if (facility.applicationType === "UN") {
      // UN typically means "per unit" - you can add this if needed
      metadata.push("per stay");
    }
    
    // Combine parts
    if (metadata.length > 0) {
      return `${parts[0]}: ${metadata.join(" · ")}`;
    }
    
    return parts[0];
  };

  return (
    <div className={`facilities ${className}`}>
      {displayed.map((facility, index) => {
        const display = getFacilityDisplay(facility.description?.content);
        const facilityText = getFacilityText(facility);

        return (
          <div
            key={index}
            className={`facility ${display ? "with-icon" : "plain"} ${
              isPaidFacility(facility) ? "paid" : ""
            }`}
          >
            {display ? (
              <>
                <display.Icon size={20} color={display.color || "#E88D67"} />
                <span className="facility-label">{facilityText}</span>
              </>
            ) : (
              <>
                <span className="dot" />
                <span className="facility-label">{facilityText}</span>
              </>
            )}

            {isPaidFacility(facility) && (
              <span className="paid-badge">Extra charge</span>
            )}
          </div>
        );
      })}
    </div>
  );
};