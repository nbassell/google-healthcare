import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Form from './form'
import VaccineIndex from './vaccine/vaccine_index';

function App() {
  return (
    <>
      <Route exact path="/" component={Form} />
      <Switch>
        <Route path="/upcoming" component={VaccineIndex} />
      </Switch>
    </>
  );
}

export default App;
