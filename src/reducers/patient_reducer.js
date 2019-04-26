import { RECEIVE_PATIENT } from '../actions/patient_action';

export default (state = {}, action) => {
  // Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_PATIENT:
      return action.patient;
    default:
      return state;
  }
};