export const upcomingDates = (vaccines) => {
  return vaccines.filter((vaccine) => vaccine['next dose(s)'][0].seconds < Date.now());
};

export const previousDates = (vaccines) => {
  return Object.values(vaccines).filter(vaccine => vaccine.date < Date.now());
};

export const pastDueDates = (vaccines) => {
  return Object.values(vaccines).filter(vaccine => !vaccine.date);
};