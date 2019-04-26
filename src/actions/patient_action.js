import { db } from '../firebase/firebase';
export const RECEIVE_PATIENT = "RECEIVE_PATIENT";

export const receiveTrack = (patient) => {
  return {
    type: RECEIVE_PATIENT,
    patient,
  };
};

export const fetchPatient = patient => {
  return dispatch => {
    db.collection('patients').get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          console.log(doc.id, '=>', doc.data());
        });
      })
      .catch((err) => {
        console.log('Error getting documents', err);
      });

  };
};