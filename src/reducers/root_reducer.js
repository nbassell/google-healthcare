import { combineReducers } from 'redux';
import patients from './patient_reducer';
import vaccines from './vaccine_reducer';

export default combineReducers({
  patients,
  vaccines,
});