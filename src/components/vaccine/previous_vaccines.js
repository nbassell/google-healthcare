import VaccineIndex from './vaccine_index';
import { previousDates } from '../../store/selectors';
import { connect } from 'react-redux';

const msp = (state) => {
  return {
    vaccines: previousDates(state.vaccines),
    type: "previous",
  }
}

export default connect(msp, null)(VaccineIndex)