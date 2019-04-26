import React, { Component } from 'react';

class VaccineIndexItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { vaccine } = this.props;

    return (
      <li className="vaccine-list-item">
        <p className="vaccine-name">
          {vaccine.name}
        </p>
      </li>
    )
  }
}

export default VaccineIndexItem;