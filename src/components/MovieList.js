import React from 'react';
import Movie from './Movie.js'

function MovieList(props) {
    return (
        <div>
            {props.movies.map(m => <Movie {...m} />)}
            {/* {props.movies.map(m => <Movie key={m.id} name={m.name} year={m.year} image={m.image} imdb={m.imdb} rating={m.rating} youtube={m.youtube}/>)} */}
        </div>
    );
}

export default MovieList;