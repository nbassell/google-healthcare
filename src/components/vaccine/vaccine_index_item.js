import React, { Component } from 'react';
import './vaccine_index_item.scss';

class VaccineIndexItem extends Component {
  render() {
    const { vaccine } = this.props;

    return (
      <li className="vaccine-list-item">
        <div className="vaccine-list-item-node">
          <div className="vaccine-list-item-circle">
          </div>
        </div>
        <div className="vaccine-list-item-info">
          <p className="vaccine-name">
            {vaccine.name}
          </p>
        </div>
      </li>
    )
  }
}

export default VaccineIndexItem;