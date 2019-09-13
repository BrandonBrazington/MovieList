import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css'

function Movie(props) {
    return <div className="movie">
        <span>{props.name} ({props.year})</span>
    </div>;
}

Movie.propTypes = {
    name: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired
}

export default Movie;