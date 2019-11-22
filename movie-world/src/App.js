import React from 'react';
import { HomePage } from './containers/HomePage/HomePage'

import { BrowserRouter as Router, Route } from "react-router-dom"
function App() {
  return (
    <div>

      <Router>
        <div >
          <Route exact path="/" component={HomePage} />

        </div >

      </Router>


    </div>



  );
}

export default App;
