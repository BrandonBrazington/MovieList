import React from 'react';
//import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList.js';

const movies = [
  {id: 1, name: "Unstoppable", year: "2010"},
  {id: 2, name: "Man of Steel", year: "2013"},
  {id: 3, name: "Guardians of the Galaxy", year: "2014"},
  {id: 4, name: "Ant-Man", year: "2015"},
  {id: 5, name: "The Avengers", year: "2012"},
]

function App() {
  return (
    <div className="App">
      <MovieList movies={movies}></MovieList>
    </div>
  );
}

export default App;
