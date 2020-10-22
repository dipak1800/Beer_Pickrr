import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Pages/HomePage/HomePage';
import FavouratePage from './Pages/FavoratesPage/FavouratePage';
import BeerDetails from './Pages/BeerDetailsPage/BeerDetails';
import Page_Not_Found from './Pages/PageNotFound/Page404';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/myFavourates" exact component={FavouratePage} />
        <Route path="/beerDetails/:id" exact component={BeerDetails} />
        <Route path="*" exact component={Page_Not_Found} />


      </Switch>
    </div>
  );
}

export default App;
