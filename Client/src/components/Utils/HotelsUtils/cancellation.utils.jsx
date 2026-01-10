export function getCancellationBadge(rate, currentDate = new Date()) {
  const policies = rate?.cancellationPolicies || [];

  if (policies.length === 0 || rate.rateClass === "NRF") {
    return {
      label: "Non-refundable",
      color: "red",
      details: "This rate cannot be canceled or modified. Full payment required at booking.",
    };
  }

  const policy = policies[0];
  const penalty = parseFloat(policy.amount) || 0;
  const deadline = new Date(policy.from);

  // Deadline already passed → free now
  if (deadline < currentDate) {
    return {
      label: "Free cancellation",
      color: "green",
      details: "You can cancel for free at any time before check-in.",
    };
  }

  // Deadline in the future
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

  // Partial refund (penalty after deadline)
  const penaltyText = `${penalty.toFixed(2)} ${rate.currency || "EUR"}`;

  return {
    label: `Partial refund before ${formattedDate}`,
    color: "orange",
    details: `Free cancellation until ${formattedDate}. After that, a ${penaltyText} penalty applies.`,
  };
}