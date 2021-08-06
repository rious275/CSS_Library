import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ModalBtn from './Modal01/ModalBtn';
import SliderSlick from './Slider01/SliderSlick';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/modal01" component={ModalBtn} />
        <Route exact path="/slider01" component={SliderSlick} />
      </Switch>
    </Router>
  );
}

export default Routes;
