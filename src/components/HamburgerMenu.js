import React from 'react';
import PropTypes from 'prop-types';
import { slide as Menu } from 'react-burger-menu'
import './css/HamburgerMenu.css';
import { Link } from 'react-router-dom';

class HamburgerMenu extends React.Component {
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


  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu right>
        <Link to="/" id="home" className="menu-item">Select Different List</Link>
        {this.props.showUnviewed ? <Link to={"/" + this.props.listID + "/viewed"} id="viewed" className="menu-item">Go to Viewed Movies</Link> : <Link to={"/" + this.props.listID} id="unviewed" className="menu-item" href="/contact">Go to Unviewed Movies</Link>}
        {this.props.movies ? <a type="button" id="pick-movie-button" className="menu-item" onClick={(e) => this.pickMovie(this.props.movies, this.props.showViewed, this.props.showUnviewed, e)}>Randomly pick a movie</a> : null}
      </Menu>
    );
  }
}

HamburgerMenu.propTypes = {
  listID: PropTypes.string.isRequired,
  showViewed: PropTypes.bool,
  showUnviewed: PropTypes.bool,
  movies: PropTypes.array
}


export default HamburgerMenu;