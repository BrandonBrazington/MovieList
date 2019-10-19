import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieSite from './components/MovieSite.js';
import ListPicker from './components/ListPicker.js';
import meganList from './megan.json'

const brandonList = {
  listName: "Brandon's Favorite Movies",
  movies: [
    {
      name: "Unstoppable",
      year: "2010",
      imdb: "tt0477080",
      youtube: "fyuoIqeL-bc",
      rating: "PG-13",
      image: "https://upload.wikimedia.org/wikipedia/" +
        "en/9/9e/Unstoppable_Poster.jpg",
      viewed: false
    },
    {
      name: "Man of Steel",
      year: "2013",
      imdb: "tt0770828",
      youtube: "T6DJcgm3wNY",
      rating: "PG-13",
      image: "https://upload.wikimedia.org/wikipedia/" +
        "en/8/85/ManofSteelFinalPoster.jpg",
      viewed: false
    },
    {
      name: "Guardians of the Galaxy",
      year: "2014",
      imdb: "tt2015381",
      youtube: "d96cjJhvlMA",
      rating: "PG-13",
      image: "https://upload.wikimedia.org/wikipedia/" +
        "en/b/b5/Guardians_of_the_Galaxy_poster.jpg",
      viewed: false
    },
    {
      name: "Ant-Man",
      year: "2015",
      imdb: "tt0478970",
      youtube: "pWdKf3MneyI",
      rating: "PG-13",
      image: "https://upload.wikimedia.org/wikipedia/" +
        "en/7/75/Ant-Man_poster.jpg",
      viewed: false
    },
    {
      name: "The Avengers",
      year: "2012",
      imdb: "tt0848228",
      youtube: "1hPpG4s3-O4",
      rating: "PG-13",
      image: "https://upload.wikimedia.org/wikipedia/" +
        "en/f/f9/TheAvengers2012Poster.jpg",
      viewed: false
    },
  ]
}

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/megan">
            <MovieSite siteInfo={meganList}></MovieSite>
          </Route>
          <Route path="/brandon">
            <MovieSite siteInfo={brandonList}></MovieSite>
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
