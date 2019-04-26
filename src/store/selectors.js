export const upcomingDates = (vaccines) => {
  return Object.values(vaccines).filter(vaccine => vaccine.date > Date.now());
};

export const previousDates = (vaccines) => {
  return Object.values(vaccines).filter(vaccine => vaccine.date < Date.now());
};

export const pastDueDates = (vaccines) => {
  return Object.values(vaccines).filter(vaccine => !vaccine.date);
};