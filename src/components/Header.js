import React from 'react';
import PropTypes from 'prop-types';
import "./css/Header.css";

class Header extends React.Component {
    pickMovie(movies) {
        let unviewedMovies = movies.filter((movie) => {
            return !(movie.viewed)
        })
        let currentPick = unviewedMovies[Math.floor(Math.random() * unviewedMovies.length)];
        console.log(currentPick);
        window.open("https://www.imdb.com/title/" + currentPick.imdb, "_blank");
    }
    
    render() {
        return <header className="navbar-fixed-top">
        <h1>{this.props.listName} List</h1>
        <button type="button" id="pick-movie-button" onClick={(e) => this.pickMovie(this.props.movies, e)}>Randomly pick a movie</button>
        </header>
    }    
}

Header.propTypes = {
    listName: PropTypes.string.isRequired,
    movies: PropTypes.array.isRequired
}

export default Header;