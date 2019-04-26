import React from 'react';
import './App.css';
import Form from './form'
import Previous from './vaccine/previous_vaccines';
import Upcoming from './vaccine/upcoming_vaccines';
import PastDue from './vaccine/pastdue_vaccines';

function App() {
  return (
    <>
      <Form />
      <Previous />
      <div className="vaccine-list-item-node fade green-to-red"></div>
      <PastDue />
      <div className="vaccine-list-item-node fade red-to-yellow"></div>
      <Upcoming />
    </>
  );
}

export default App;
