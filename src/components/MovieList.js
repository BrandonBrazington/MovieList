import React from 'react';
import Movie from './Movie.js';
import "./css/MovieList.css";

function MovieList(props) {
    return (
        <div className="grid-container">
            {props.movies.map((m, id) => <Movie key={id} {...m} />)}
            {/* {props.movies.map(m => <Movie key={m.id} name={m.name} year={m.year} image={m.image} imdb={m.imdb} rating={m.rating} youtube={m.youtube}/>)} */}
        </div>
    );
}

export default MovieList;