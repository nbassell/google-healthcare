export const upComingDates = (vaccines) => {
  return Object.values(vaccines).filter((vaccine) => {
    vaccine.date > Date.now();
  })
}

export const previousDates = (vaccines) => {
  return Object.values(vaccines).filter((vaccine) => {
    vaccine.date < Date.now();
  })
}