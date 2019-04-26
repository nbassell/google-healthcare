import React, { Component } from 'react';
import VaccineIndexItem from './vaccine_index_item';
import "./vaccine_index.scss";

class VaccineIndex extends Component {
  render() {
    const mapVaccines = this.props.vaccines.map((vaccine, key) => (
      <VaccineIndexItem vaccine={vaccine} key={key} type={this.props.type} />
    ))

    return (
      <section className="vaccine-index">
        <ul className="vaccine-list">
          {mapVaccines}
        </ul>
      </section>
    )
  }
}

export default VaccineIndex;