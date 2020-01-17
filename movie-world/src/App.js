import React from 'react';
import { HomePage } from './Pages/HomePage/HomePage'
import { Favourite } from './Pages/Favourite/Favourite'
import SearchPage from './Pages/Search/SearchPage'
import MovieItem from './Pages/MovieItem/MovieItem'
import { BrowserRouter as Router, Route } from "react-router-dom"
function App() {
  return (
    <div>

      <Router>
        <div >
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Favourite" component={Favourite} />
          <Route exact path="/movie/:id" component={MovieItem} />
          <Route exact path="/search/:id" component={SearchPage} />
        </div >

      </Router>


    </div>



  );
}

export default App;
