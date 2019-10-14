import React from 'react';
import PropTypes from 'prop-types';
import "./css/Header.css";

class Header extends React.Component {
    pickMovie(movies) {
        let currentPick = movies[Math.floor(Math.random() * movies.length)];
        console.log(currentPick);
        window.open("https://www.imdb.com/title/" + currentPick.imdb, "_blank");
    }
    
    render() {
        return <header className="navbar-fixed-top">
        <h1>{this.props.listName} List</h1>
        <button id="pick-movie-button" onClick={(e) => this.pickMovie(this.props.movies, e)}>Randomly pick a movie</button>
        </header>
    }    
}

Header.propTypes = {
    listName: PropTypes.string.isRequired,
    movies: PropTypes.array.isRequired
}

export default Header;