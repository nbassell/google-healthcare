import React from 'react';
import { connect } from 'react-redux';
import './main.css'
import Previous from './vaccine/previous_vaccines';
import Upcoming from './vaccine/upcoming_vaccines';
import PastDue from './vaccine/pastdue_vaccines';

function Main(props) {
  if (props.loading) {
    return (
      <div className="loader"></div>
    )
  }

  if (!props.vaccines.length) return (
    <div className='no-data' >
      <p>No data yet! Please search for a patient. E.g. Tommy Pickles</p>
      <img src='/no_data2.png' alt='no data'></img>
    </div>
  );
  return (
    <>
      <Previous />
      <div className="vaccine-list-item-node fade green-to-red"></div>
      <PastDue />
      <div className="vaccine-list-item-node fade red-to-yellow"></div>
      <Upcoming />
    </>
  );
}

const msp = (state) => {
  return {
    vaccines: state.vaccines,
    loading: state.ui,
  }
}

export default connect(msp, null)(Main);
