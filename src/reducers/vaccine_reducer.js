import { RECEIVE_PATIENT } from '../actions/patient_action';
import { merge } from "lodash";

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  
  switch (action.type) {
    
    default:
      return state;
  }
};