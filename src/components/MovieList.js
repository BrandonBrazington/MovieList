import React from 'react';
import Movie from './Movie.js';
import PropTypes from 'prop-types';
import "./css/MovieList.css";
import { Link } from 'react-router-dom';

function MovieList(props) {  
    if (Array.isArray(props.movies) && props.movies.length && props.movies[0].year !== 0) {
        let filteredMovies = props.movies.filter((movie) => {
            if (props.showViewed && movie.viewed) { return true }
            if (props.showUnviewed && !movie.viewed) {return true}
            return false;
        })
        if (filteredMovies.length === 0) {
            return (
                <div className="no-movies-due-to-filter">
                <p className="no-movies no-movies-filtered">There are no movies that match the current filter.</p>
                {props.showUnviewed ? <Link to={"/" + props.listID + "/viewed"}>Go to movies marked as viewed</Link> : <Link to={"/" + props.listID}>Go to movies not marked as viewed</Link>}
                </div>
            )
            
        }
        return (
            <div className="grid-container">
                {filteredMovies.map((m, id) => <Movie key={id} {...m} switchViewedState={props.switchViewedState} />)}
            </div>
        );
    }
    return <p className="no-movies">There are no movies attached to this list. Please add some movies and come back!</p>;
}

MovieList.propTypes = {
    movies: PropTypes.array.isRequired,
    showViewed: PropTypes.bool.isRequired,
    showUnviewed: PropTypes.bool.isRequired,
    switchViewedState: PropTypes.func.isRequired,
    listID: PropTypes.string.isRequired
}

export default MovieList;