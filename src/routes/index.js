import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './route';

import Home from '../pages/Home/index';
import NewMenssage from '../pages/NewMenssage';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/newmenssage" exact component={NewMenssage} />
    </Switch>
  );
}
