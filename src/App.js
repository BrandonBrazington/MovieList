import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieSite from './components/MovieSite.js';
import ListPicker from './components/ListPicker.js';
import meganList from './megan.json';
import brandonList from './brandon.json';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/megan/viewed">
            <MovieSite siteInfo={meganList} showViewed={true} showUnviewed={false}></MovieSite>
          </Route>
          <Route path="/brandon/viewed">
            <MovieSite siteInfo={brandonList} showViewed={true}showUnviewed={false}></MovieSite>
          </Route>
          <Route path="/megan">
            <MovieSite siteInfo={meganList} showViewed={false} showUnviewed={true}></MovieSite>
          </Route>
          <Route path="/brandon">
            <MovieSite siteInfo={brandonList} showViewed={false} showUnviewed={true}></MovieSite>
          </Route>
          <Route path="/">
            <ListPicker></ListPicker>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
