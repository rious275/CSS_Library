import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ModalBtn from './Modal/ModalBtn';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/ModalBtn" component={ModalBtn} />
      </Switch>
    </Router>
  );
}

export default Routes;
