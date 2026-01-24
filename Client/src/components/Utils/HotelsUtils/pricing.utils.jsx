
export function getBestOffer(hotel) {
  // Early return if no rooms
  if (!hotel?.rooms || hotel.rooms.length === 0) {
    return null;
  }

  // Flatten all offers from all rates in all rooms
  const allOffers = hotel.rooms
    .flatMap((room) => room.rates || [])
    .flatMap((rate) => rate.offers || []);

  // No offers? Return null
  if (allOffers.length === 0) {                                                       
    return null;
  }

  // Find the offer with the largest discount amount
  const best = allOffers.reduce(
    (best, offer) => {
      const amount = Math.abs(parseFloat(offer.amount || 0));
      return amount > best.amount ? { ...offer, amount } : best;
    },
    { amount: 0 }
  );

  // If no meaningful discount, return null
  if (best.amount <= 0) {
    return null;
  }

  return {
    hasDeal: true,
    name: best.name || "Special Offer",
    amount: best.amount.toFixed(2), // formatted string
  };
}
