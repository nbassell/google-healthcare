import React from 'react';
import { connect } from 'react-redux';
import { fetchVaccine } from '../../actions/patient_action';
import TrackIndexItem from './track_index_item';

class VaccineIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const vaccines = Object.values(this.props.vaccines).map((vaccine) => {
      < VaccineIndexItem vaccine={vaccine} />
    });
    
    return (
      <section className="vaccine-index">
        <ul className="vaccine-list">
          {vaccines}
        </ul>
      </section>
    )
  }
}

const msp = (state) => {
  return {
    vaccine: state.vaccines,
  }
}

export default connect(msp, null)(VaccineIndex)