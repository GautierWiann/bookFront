import React from 'react';
import './App.css';
import ScreenHome from './screens/screenHome';
import moviesScreen from './screens/moviesScreen';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
        <Switch>
          <Route component={ScreenHome} path="/" exact />
          <Route component={moviesScreen} path="/my-Moviz" exact />
        </Switch>
      </Router>
  );
}

export default App;
