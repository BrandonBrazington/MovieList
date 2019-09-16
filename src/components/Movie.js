import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css'

function Movie(props) {
    return <div className="movie col-md-6 col-lg-4">
        <img src={props.image} alt="" className="movie-image" width="270" height="392" />
        <h2>{props.name} ({props.year})</h2>
        <a href={"https://www.imdb.com/title/" + props.imdb + "/"} target="blank">Link to IMDB</a>
        <br/>Rating: {props.rating}
    </div>;
}

Movie.propTypes = {
    name: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imdb: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired
}

export default Movie;