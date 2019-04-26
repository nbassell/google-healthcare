import { RECEIVE_LOADING, STOP_LOADING } from '../actions/patient_action';

export default (state = false, action) => {
  
  switch (action.type) {
    case RECEIVE_LOADING:
      return true;
    case STOP_LOADING:
      return false;
    default:
      return state;
  }
};
