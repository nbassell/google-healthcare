import VaccineIndex from './vaccine_index';
import { pastDueDates } from '../../store/selectors';
import { connect } from 'react-redux';

const msp = (state) => {
  return {
    vaccines: pastDueDates(state.vaccines),
    type: "pastdue",
  }
}

export default connect(msp, null)(VaccineIndex)