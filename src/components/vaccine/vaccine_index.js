import React, { Component } from 'react';
import { connect } from 'react-redux';
import VaccineIndexItem from './vaccine_index_item';
import "./vaccine_index.scss";

class VaccineIndex extends Component {
  render() {
    const vaccines = Object.values(this.props.vaccines).map((vaccine) => {
      return < VaccineIndexItem vaccine={vaccine} />
    });

    return (
      <section className="vaccine-index">
        <ul className="vaccine-list">
          < VaccineIndexItem vaccine={{ name: "Hello" }} />
          {vaccines}
        </ul>
        <div className="vaccine-list-item-node fade">
        </div>
        <p className='end-schedule'>
          End of the schedule.
        </p>
      </section>
    )
  }
}


export default VaccineIndex;