import React from 'react';
//import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList.js';

const movies = [
  {
    id: 1,
    name: "Unstoppable",
    year: "2010",
    imdb: "tt0477080",
    youtube: "fyuoIqeL-bc",
    rating: "PG-13",
    image: "https://upload.wikimedia.org/wikipedia/" +
      "en/9/9e/Unstoppable_Poster.jpg"
  },
  {
    id: 2,
    name: "Man of Steel",
    year: "2013",
    imdb: "tt0770828",
    youtube: "T6DJcgm3wNY",
    rating: "PG-13",
    image: "https://upload.wikimedia.org/wikipedia/" +
      "en/8/85/ManofSteelFinalPoster.jpg"
  },
  {
    id: 3,
    name: "Guardians of the Galaxy",
    year: "2014",
    imdb: "tt2015381",
    youtube: "d96cjJhvlMA",
    rating: "PG-13",
    image: "https://upload.wikimedia.org/wikipedia/" +
      "en/b/b5/Guardians_of_the_Galaxy_poster.jpg"
  },
  {
    id: 4,
    name: "Ant-Man",
    year: "2015",
    imdb: "tt0478970",
    youtube: "pWdKf3MneyI",
    rating: "PG-13",
    image: "https://upload.wikimedia.org/wikipedia/" +
      "en/7/75/Ant-Man_poster.jpg"
  },
  {
    id: 5,
    name: "The Avengers",
    year: "2012",
    imdb: "tt0848228",
    youtube: "1hPpG4s3-O4",
    rating: "PG-13",
    image: "https://upload.wikimedia.org/wikipedia/" +
      "en/f/f9/TheAvengers2012Poster.jpg"
  },
]

function App() {
  return (
    <div className="App">
      <MovieList movies={movies}></MovieList>
    </div>
  );
}

export default App;
