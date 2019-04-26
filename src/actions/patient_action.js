import { db } from '../firebase/firebase';
export const RECEIVE_PATIENT = "RECEIVE_PATIENT";
export const RECEIVE_VACCINATIONS = "RECEIVE_VACCINATIONS";
export const REMOVE_VACCINATIONS = "REMOVE_VACCINATIONS";
export const RECEIVE_LOADING = "RECEIVE_LOADING";
export const STOP_LOADING = "STOP_LOADING";

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

export const removeVaccinations = () => {
  return {
    type: REMOVE_VACCINATIONS,
  }
}

export const fetchPatient = ({name}) => dispatch => {
  return db.collection('patients').where("name", "==", name).get()
    .then((snapshot) => {
      dispatch(removeVaccinations());
      if (snapshot.docs.length === 0 ) dispatch(stopLoading());
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
  dispatch(stopLoading());
}

export const receiveLoading = () => {
  return {
    type: RECEIVE_LOADING,
  };
};

export const stopLoading = () => {
  return {
    type: STOP_LOADING,
  };
};