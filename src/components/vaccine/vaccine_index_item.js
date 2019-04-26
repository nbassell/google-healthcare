import React, { Component } from 'react';
import './vaccine_index_item.scss';

class VaccineIndexItem extends Component {
  render() {
    const { vaccine, type } = this.props;
    
    let color = "";
    if (type === "previous") color = "green";
    else if (type === "upcoming") color = "yellow";
    else color = "red"

    return (
      <li className="vaccine-list-item" >
        <div className={`vaccine-list-item-node ${color}`}>
          <div className={`vaccine-list-item-circle ${color}`}>
          </div>
        </div>
        <div className="vaccine-list-item-info">
          <p className='vaccine-date'> 
            {vaccine.date}
          </p>
          <p className="vaccine-name">
            {vaccine.name}
          </p>
        </div>
      </li>
    )
  }
}

export default VaccineIndexItem;