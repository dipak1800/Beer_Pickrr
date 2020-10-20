import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Pages/HomePage/HomePage';
import FavouratePage from './Pages/FavoratesPage/FavouratePage';
import BeerDetails from './Pages/BeerDetailsPage/BeerDetails';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/myFavourates" exact component={FavouratePage} />
        <Route path="/:id" exact component={BeerDetails} />

      </Switch>
    </div>
  );
}

export default App;
