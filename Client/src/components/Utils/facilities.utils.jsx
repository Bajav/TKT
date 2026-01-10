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
    if (!allowedGroups) return true; // show all if no filter
    return allowedGroups.includes(f.facilityGroupCode);
  });

  const displayed = limit ? filtered.slice(0, limit) : filtered;

  if (displayed.length === 0) {
    return null; // or <div>No facilities in this category</div>
  }
  // Helper to detect if facility likely requires payment
  const isPaidFacility = (facility) => {
    // Strong indicators - most APIs use these consistently
    if (facility.indFee === true) return true;
    if (facility.voucher === true) return true;

    // Weaker / contextual indicators (use with caution)
    // e.g. "Transfer service", "Airport Shuttle", "Laundry service" almost always paid
    const desc = (facility.description?.content || "").toLowerCase();
    if (
      desc.includes("transfer") ||
      desc.includes("shuttle") ||
      desc.includes("laundry") ||
      (desc.includes("parking") && facility.indYesOrNo === false) ||
      desc.includes("deposit") ||
      desc.includes("fee") ||
      desc.includes("rental")
    ) {
      return true;
    }

    return false;
  };

  return (
    <div className={`facilities ${className}`}>
      {displayed.map((facility, index) => {
        const display = getFacilityDisplay(facility.description?.content);

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
                <span className="facility-label">{display.label}</span>
              </>
            ) : (
              <>
                <span className="dot" />
                <span className="facility-label">
                  {facility.description?.content}
                </span>
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
