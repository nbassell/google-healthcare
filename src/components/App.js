import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Form from './form'
import VaccineIndex from './vaccine/vaccine_index';

function App() {
  return (
    <>
      {/* <Switch> */}
        <Route path="/" component={Form} />
        <Route path="/patient/:name" component={VaccineIndex} />
      {/* </Switch> */}
    </>
  );
}

export default App;
