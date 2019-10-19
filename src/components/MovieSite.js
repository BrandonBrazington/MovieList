import React from 'react';
import PropTypes from 'prop-types';
import "./css/MovieSite.css"
import Header from './Header.js';
import MovieList from './MovieList.js';

function MovieSite(props) {
    return (
    <React.Fragment>
        <Header listName={props.siteInfo.listName} movies={props.siteInfo.movies} showViewed={props.showViewed} showUnviewed={props.showUnviewed}></Header>
        <MovieList movies={props.siteInfo.movies} showViewed={props.showViewed} showUnviewed={props.showUnviewed}></MovieList>
    </React.Fragment>
);
}

MovieSite.propTypes = {
    siteInfo: PropTypes.object.isRequired,
    showViewed: PropTypes.bool.isRequired,
    showUnviewed: PropTypes.bool.isRequired
}

export default MovieSite;