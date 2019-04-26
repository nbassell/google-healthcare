import * as moment from 'moment';
import { merge } from 'lodash';

export const upcomingDates = (vaccines) => {
  const upcoming = vaccines.filter((vaccine) => vaccine['next dose(s)'][0].seconds < Date.now());
  let result = [];

  for (let vaccine of upcoming) {
    result = result.concat(vaccine['next dose(s)'].map(timeObj => ({ name: vaccine.name, date: timeObj.seconds })));
  }

  result.sort((a, b) => a.date - b.date);

  return result.map(vaccine => merge(vaccine, { date: moment.unix(vaccine.date).calendar()}));
};

export const previousDates = (vaccines) => {
  const previous = vaccines.filter((vaccine) => vaccine['previous dose(s)'] && vaccine['previous dose(s)'][0] && vaccine['previous dose(s)'][0].seconds < Date.now());
  let result = [];
  
  for (let vaccine of previous) {
    result = result.concat(vaccine['next dose(s)'].map(timeObj => ({ name: vaccine.name, date: timeObj.seconds })));
  }

  result.sort((a, b) => a.date - b.date);

  return result.map(vaccine => merge(vaccine, { date: moment.unix(vaccine.date).calendar() }));
};

export const pastDueDates = (vaccines) => {
  return [{ name: 'Today', date: moment(Date.now()).format("MMM Do YYYY")}];
};