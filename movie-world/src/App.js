import React from 'react';
import { HomePage } from './Pages/HomePage/HomePage'
import { Favourite } from './Pages/Favourite/Favourite'

import { BrowserRouter as Router, Route } from "react-router-dom"
function App() {
  return (
    <div>

      <Router>
        <div >
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Favourite" component={Favourite} />

        </div >

      </Router>


    </div>



  );
}

export default App;
