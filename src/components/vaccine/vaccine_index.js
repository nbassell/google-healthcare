import React, { Component } from 'react';
import { connect } from 'react-redux';
import VaccineIndexItem from './vaccine_index_item';

class VaccineIndex extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const vaccines = Object.values(this.props.vaccines).map((vaccine, id) => {
      < VaccineIndexItem vaccine={vaccine} key={id} />
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