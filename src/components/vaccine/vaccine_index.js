import React, { Component } from 'react';
import VaccineIndexItem from './vaccine_index_item';
import "./vaccine_index.scss";

class VaccineIndex extends Component {
  render() {
    const vaccines = this.props.vaccines.map((vaccine) => {
      return < VaccineIndexItem vaccine={vaccine} type={this.props.type}/>
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