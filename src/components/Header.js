import React from 'react';
import PropTypes from 'prop-types';
import "./css/Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component {
    pickedMovies = [];

    pickMovie(movies, viewed, unviewed) {
        let filteredMovies = movies.filter((movie) => {
            if (viewed && movie.viewed) { return true }
            if (unviewed && !movie.viewed) { return true }
            return false;
        })
        let currentPick = "";
        while (currentPick === "") {
            currentPick = filteredMovies[Math.floor(Math.random() * filteredMovies.length)];
            if (this.pickedMovies.indexOf(currentPick) !== -1) currentPick = ""
        }
        this.pickedMovies.push(currentPick);
        window.open("https://www.imdb.com/title/" + currentPick.imdb, "_blank");
        if (this.pickedMovies.length === filteredMovies.length) {
            alert("All movies have been randomly picked now. The list has been reset.");
            this.pickedMovies = [];
        }
    }

    editListName(currentListName) {
        let newListName = prompt("What would you like the list to be named? Note that 'List' will automatically appear after your given title.", currentListName)
        if (newListName != null) {
            this.props.editListName(newListName);
        }
    }

    render() {
        return (
            <header className="navbar-fixed-top">
                <h1>
                    {this.props.listName} List
                     {' '}
                    <span className="edit-icon-button" onClick={(e) => this.editListName(this.props.listName)} ><FontAwesomeIcon icon={faEdit} /></span>
                </h1>
                {this.props.movies ? <button type="button" id="pick-movie-button" className="button" onClick={(e) => this.pickMovie(this.props.movies, this.props.showViewed, this.props.showUnviewed, e)}>Randomly pick a movie</button> : null}

            </header>
        )
    }
}

Header.propTypes = {
    listName: PropTypes.string.isRequired,
    movies: PropTypes.array,
    showViewed: PropTypes.bool,
    showUnviewed: PropTypes.bool,
    editListName: PropTypes.func.isRequired
}

export default Header;