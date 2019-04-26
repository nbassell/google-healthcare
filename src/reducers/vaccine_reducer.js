import { RECEIVE_VACCINATION, RECEIVE_PATIENT } from '../actions/patient_action';

export default (state = [], action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_VACCINATION:
      return state.concat(action.vaccination);
    case RECEIVE_PATIENT:
      return [];
    default:
      return state;
  }
};