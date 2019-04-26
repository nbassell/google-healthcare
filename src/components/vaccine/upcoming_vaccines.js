import VaccineIndex from './vaccine_index';
import { upComingDates } from '../../store/selectors';
import { connect } from 'react-redux';

const msp = (state) => {
  return {
    vaccines: upComingDates(state.vaccines),
    type: "upcoming",
  }
}

export default connect(msp, null)(VaccineIndex)