export  const totalJourneyTime = (segments) => {
  let totalMinutes = 0;
  
  segments.forEach((segment) => {
    const duration = segment.duration;
    
    // Handle PT8H30M, PT8H, PT30M formats
    const hourMatch = duration.match(/(\d+)H/);
    const minuteMatch = duration.match(/(\d+)M/);
    
    const hours = hourMatch ? parseInt(hourMatch[1]) : 0;
    const minutes = minuteMatch ? parseInt(minuteMatch[1]) : 0;
    
    totalMinutes += hours * 60 + minutes;
  });
  
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  
  return { hours, minutes, totalMinutes };
};

// used to calculate total journey time from segments array without layovers