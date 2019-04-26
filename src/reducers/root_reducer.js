import { combineReducers } from 'redux';
import patient from './patient_reducer';
import vaccine from './vaccine_reducer';

export default combineReducers({
  patients,
  vaccines,
});