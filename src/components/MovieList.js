import React from 'react';
import Movie from './Movie.js';
import PropTypes from 'prop-types';
import "./css/MovieList.css";

function MovieList(props) {
    let filteredMovies = props.movies.filter((movie) => {
        if (props.showViewed && movie.viewed) { return true }
        if (props.showUnviewed && !movie.viewed) {return true}
        return false;
    })
    return (
        <div className="grid-container">
            {filteredMovies.map((m, id) => <Movie key={id} {...m} switchViewedState={props.switchViewedState} />)}
        </div>
    );
}

MovieList.propTypes = {
    movies: PropTypes.array.isRequired,
    showViewed: PropTypes.bool.isRequired,
    showUnviewed: PropTypes.bool.isRequired,
    switchViewedState: PropTypes.func.isRequired
}

export default MovieList;