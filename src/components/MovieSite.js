import React from 'react';
import PropTypes from 'prop-types';
import "./css/MovieSite.css"
import Header from './Header.js';
import MovieList from './MovieList.js';

function MovieSite(props) {
    return (
    <React.Fragment>
        <Header listName={props.siteInfo.listName} movies={props.siteInfo.movies}></Header>
        <MovieList movies={props.siteInfo.movies}></MovieList>
    </React.Fragment>
);
}

MovieSite.propTypes = {
    siteInfo: PropTypes.object.isRequired
}

export default MovieSite;