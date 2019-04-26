import { RECEIVE_VACCINATIONS, REMOVE_VACCINATIONS } from '../actions/patient_action';

export default (state = [], action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_VACCINATIONS:
      return action.vaccinations;
    case REMOVE_VACCINATIONS:
      return [];
    default:
      return state;
  }
};