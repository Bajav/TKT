export function getCancellationBadge(rate, currentDate = new Date()) {
  const policies = rate?.cancellationPolicies || [];
  const rateClass = rate?.rateClass || "UNKNOWN";

  // Default fallback for unknown or missing rateClass
  if (!["NRF", "NOR", "NRC", "OR"].includes(rateClass)) {
    return {
      label: "Unknown policy",
      color: "gray",
      details: "Cancellation policy not available for this rate.",
    };
  }

  // 1. NRF - Non-Refundable (most common cheapest rate)
  if (rateClass === "NRF") {
    return {
      label: "Non-refundable",
      color: "red",
      details: "This rate cannot be canceled or modified. Full payment required at booking.",
    };
  }

  // 2. OR - On Request (hotel must confirm, usually refundable after confirmation)
  if (rateClass === "OR") {
    return {
      label: "On request",
      color: "orange",
      details: "This rate is on request. Hotel confirmation required. Cancellation policy applies after approval.",
    };
  }

  // 3. NRC - Non-Refundable with Conditions (rare, similar to NRF but with extra rules)
  if (rateClass === "NRC") {
    return {
      label: "Non-refundable (conditions)",
      color: "red",
      details: "This rate cannot be canceled or modified. Additional conditions may apply.",
    };
  }

  // 4. NOR - Normal / Refundable (the flexible one)
  // This is the only one with potential free cancellation window
  if (policies.length === 0) {
    // Edge case: NOR without policies → treat as non-refundable
    return {
      label: "Non-refundable",
      color: "red",
      details: "No cancellation policy provided for this rate.",
    };
  }

  const policy = policies[0]; // Usually only one policy
  const penalty = parseFloat(policy.amount) || 0;
  const deadline = new Date(policy.from);

  // Deadline already passed → already non-refundable
  if (deadline < currentDate) {
    return {
      label: "Free cancellation",
      color: "green",
      details: "You can cancel for free at any time before check-in (deadline passed).",
    };
  }

  // Deadline in future
  const formattedDate = deadline.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  if (penalty === 0) {
    return {
      label: `Free cancellation before ${formattedDate}`,
      color: "green",
      details: `Cancel for free until ${formattedDate}. No penalty.`,
    };
  }

  // Partial refund
  const penaltyText = `${penalty.toFixed(2)} ${rate.currency || "EUR"}`;

  return {
    label: `Partial refund before ${formattedDate}`,
    color: "orange",
    details: `Free cancellation until ${formattedDate}. After that, a ${penaltyText} penalty applies.`,
  };
}