import { db } from '../firebase/firebase';
export const RECEIVE_PATIENT = "RECEIVE_PATIENT";
export const RECEIVE_VACCINATIONS = "RECEIVE_VACCINATIONS";

export const receivePatient = (patient) => {
  return {
    type: RECEIVE_PATIENT,
    patient,
  };
};

export const receiveVaccinations = (vaccinations) => {
  return {
    type: RECEIVE_VACCINATIONS,
    vaccinations,
  }
}

export const fetchPatient = ({name}) => dispatch => {
  db.collection('patients').where("name", "==", name).get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        dispatch(receivePatient(doc.data()));
        fetchVaccinations(dispatch)(doc.data().vaccinations);
      })
    })
    .catch((err) => {
      console.log('Error getting documents', err);
    });
}

const fetchVaccinations = dispatch => async vaccinations => {
  let result = [];
  for (let key in vaccinations) {
    await vaccinations[key].get().then((vaccination) => {
      result.push(vaccination.data());
    });
  }
  dispatch(receiveVaccinations(result));
}