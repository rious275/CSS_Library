import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ModalBtn from './Modal01/ModalBtn';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/Modal01" component={ModalBtn} />
      </Switch>
    </Router>
  );
}

export default Routes;
