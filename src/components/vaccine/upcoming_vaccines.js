import VaccineIndex from './vaccine_index';
import { upcomingDates } from '../../store/selectors';
import { connect } from 'react-redux';

const msp = (state) => {
  return {
    vaccines: upcomingDates(state.vaccines),
    type: "upcoming",
  }
}

export default connect(msp, null)(VaccineIndex)