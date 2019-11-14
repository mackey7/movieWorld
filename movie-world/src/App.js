import React from 'react';
import { HomePage } from './containers/HomePage/HomePage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div >
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
