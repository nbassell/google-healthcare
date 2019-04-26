import { RECEIVE_VACCINATIONS } from '../actions/patient_action';

export default (state = [], action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_VACCINATIONS:
      return action.vaccinations;
    default:
      return state;
  }
};