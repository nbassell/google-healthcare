import React, { Component } from 'react';
import VaccineIndexItem from './vaccine_index_item';
import { db } from '../../firebase/firebase';
import "./vaccine_index.scss";

class VaccineIndex extends Component {
  componentDidMount() {
    db.collection('patients').get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          console.log(doc.id, '=>', doc.data());
        });
      })
      .catch((err) => {
        console.log('Error getting documents', err);
      });
  }

  render() {
    return (
      <section className="vaccine-index">
        <ul className="vaccine-list">
          < VaccineIndexItem vaccine={{ name: "Hello" }} />
          {/* {vaccines} */}
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