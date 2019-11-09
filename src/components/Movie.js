import React from 'react';
import PropTypes from 'prop-types';
import './css/Movie.css'

class Movie extends React.Component {
    switchViewedState = event => {
        event.preventDefault();
        this.props.switchViewedState(this.props.imdb);
    }

    render() {
        return <div className="movie col-md-6 col-lg-4">
            <img src={this.props.image} alt="" className="movie-image" width="270" height="392" />
            <h2>{this.props.name} ({this.props.year.toString()})</h2>
            <a href={"https://www.imdb.com/title/" + this.props.imdb + "/"} target="_blank" rel="noopener noreferrer" >Link to IMDB</a>
            <br />
            <a href={"https://www.youtube.com/watch?v=" + this.props.youtube} target="_blank" rel="noopener noreferrer" >Watch the trailer</a>
            <br />Rating: {this.props.rating}
            <br />
            <button type="button" onClick={this.switchViewedState}>Mark as {this.props.viewed ? "unseen" : "viewed"}</button>
        </div>;
    }
}

Movie.propTypes = {
    name: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    imdb: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    youtube: PropTypes.string.isRequired,
    viewed: PropTypes.bool.isRequired,
    switchViewedState: PropTypes.func.isRequired
}

export default Movie;