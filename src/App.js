import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './nav';
import Tree from './tree';
import Table from './table'

const App = (props) => {
  return <Router>
    <Route component={Nav}/>
    <Switch>
      <Route path="tree" component={Tree}/>
      <Route component={Table}/>
    </Switch>
  </Router>;
}

export default App;
