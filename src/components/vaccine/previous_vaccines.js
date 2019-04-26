import VaccineIndex from './vaccine_index';
import { previousDates } from '../../store/selectors';

const msp = (state) => {
  return {
    vaccines: previousDates(state.vaccines),
  }
}

export default connect(msp, null)(VaccineIndex)