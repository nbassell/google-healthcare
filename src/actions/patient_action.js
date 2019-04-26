import { db } from '../firebase/firebase';
export const RECEIVE_PATIENT = "RECEIVE_PATIENT";
export const RECEIVE_VACCINATION = "RECEIVE_VACCINATION";

export const receivePatient = (patient) => {
  return {
    type: RECEIVE_PATIENT,
    patient,
  };
};

export const receiveVaccination = (vaccination) => {
  return {
    type: RECEIVE_VACCINATION,
    vaccination,
  }
}

export const fetchPatient = ({name}) => dispatch => {
  db.collection('patients').where("name", "==", name).get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
    
        dispatch(receivePatient(doc.data()));

        try {
          for (let key in doc.data().vaccinations) {
            doc.data().vaccinations[key].get()
              .then((vaccination) => {
                dispatch(receiveVaccination(vaccination.data()));
              });
          }
        } catch (error) {
          console.log(error);
        }
      })
    })
    .catch((err) => {
      console.log('Error getting documents', err);
    });
}