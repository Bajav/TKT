export const getJourneyBreakdown = (segments) => {
  if (!segments || segments.length === 0) {
    return null;
  }
  
  // Total journey time
  const firstDeparture = new Date(segments[0].departure.at);
  const lastArrival = new Date(segments[segments.length - 1].arrival.at);
  const totalMinutes = Math.floor((lastArrival - firstDeparture) / 1000 / 60);
  
  // Total flight time
  let flightMinutes = 0;
  segments.forEach((segment) => {
    const hourMatch = segment.duration.match(/(\d+)H/);
    const minuteMatch = segment.duration.match(/(\d+)M/);
    const hours = hourMatch ? parseInt(hourMatch[1]) : 0;
    const minutes = minuteMatch ? parseInt(minuteMatch[1]) : 0;
    flightMinutes += hours * 60 + minutes;
  });
  
  // Layover time = total - flight time
  const layoverMinutes = totalMinutes - flightMinutes;
  
  return {
    total: {
      hours: Math.floor(totalMinutes / 60),
      minutes: totalMinutes % 60,
      totalMinutes,
      formatted: `${Math.floor(totalMinutes / 60)}h ${totalMinutes % 60}m`
    },
    flight: {
      hours: Math.floor(flightMinutes / 60),
      minutes: flightMinutes % 60,
      totalMinutes: flightMinutes,
      formatted: `${Math.floor(flightMinutes / 60)}h ${flightMinutes % 60}m`
    },
    layover: {
      hours: Math.floor(layoverMinutes / 60),
      minutes: layoverMinutes % 60,
      totalMinutes: layoverMinutes,
      formatted: `${Math.floor(layoverMinutes / 60)}h ${layoverMinutes % 60}m`
    }
  };
};

/*
{
  total: { hours: 8, minutes: 40, totalMinutes: 520, formatted: "8h 40m" },
  flight: { hours: 6, minutes: 25, totalMinutes: 385, formatted: "6h 25m" },
  layover: { hours: 1, minutes: 15, totalMinutes: 75, formatted: "1h 15m" }
}
*/