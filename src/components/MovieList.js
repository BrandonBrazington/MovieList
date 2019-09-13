import React from 'react';
import Movie from './Movie.js'

function MovieList(props) {
    return (
        <div>
            {props.movies.map(m => <Movie key={m.id} name={m.name} year={m.year} />)}
        </div>
    );
}

export default MovieList;