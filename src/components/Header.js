import React from 'react';
import PropTypes from 'prop-types';
import "./css/Header.css";

class Header extends React.Component {
    pickMovie(movies, viewed, unviewed) {
        let filteredMovies = movies.filter((movie) => {
            if (viewed && movie.viewed) { return true }
            if (unviewed && !movie.viewed) { return true }
            return false;
        })
        let currentPick = filteredMovies[Math.floor(Math.random() * filteredMovies.length)];
        console.log(currentPick);
        window.open("https://www.imdb.com/title/" + currentPick.imdb, "_blank");
    }

    render() {
        return <header className="navbar-fixed-top">
            <h1>{this.props.listName} List</h1>
            <button type="button" id="pick-movie-button" onClick={(e) => this.pickMovie(this.props.movies, this.props.showViewed, this.props.showUnviewed, e)}>Randomly pick a movie</button>
        </header>
    }
}

Header.propTypes = {
    listName: PropTypes.string.isRequired,
    movies: PropTypes.array.isRequired,
    showViewed: PropTypes.bool.isRequired,
    showUnviewed: PropTypes.bool.isRequired
}

export default Header;