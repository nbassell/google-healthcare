import React, { Component } from 'react';
import VaccineIndexItem from './vaccine_index_item';
import "./vaccine_index.scss";

class VaccineIndex extends Component {
  render() {
    return (
      <section className="vaccine-index">
        <ul className="vaccine-list">
          < VaccineIndexItem vaccine={{ name: "Hello" }} type={this.props.type} />
        </ul>
      </section>
    )
  }
}

export default VaccineIndex;