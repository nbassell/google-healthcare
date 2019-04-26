import * as TrackAPI from "../utils/patient_util";
export const RECEIVE_PATIENT = "RECEIVE_PATIENT";

export const receiveTrack = (patient) => {
  return {
    type: RECEIVE_PATIENT,
    patient,
  };
};

export const fetchPatient = patient => {
  return dispatch => {
    return TrackAPI.fetchPatient(patient).then( (patient) => {
        return dispatch(receiveTrack(patient));
      });
  };
};