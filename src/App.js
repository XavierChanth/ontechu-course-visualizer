import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Nav, Tree, Table } from './components'

const App = (props) => {
  return <Router>
    <Route component={Nav}/>
    <Switch>
      <Route path="/tree" component={Tree}/>
      <Route component={Table}/>
    </Switch>
  </Router>;
}

export default App;
