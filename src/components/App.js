import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Form from './form'
import Previous from './vaccine/previous_vaccines';
import UpComing from './vaccine/upcoming_vaccines';
import PastDue from './vaccine/pastdue_vaccines';

function App() {
  return (
    <>
      <Route exact path="/" component={Form} />
      <Switch>
        <Route path="/pastdue" component={PastDue} />
        <Route path="/upcoming" component={UpComing} />
        <Route path="/previous" component={Previous} />
      </Switch>
    </>
  );
}

export default App;
