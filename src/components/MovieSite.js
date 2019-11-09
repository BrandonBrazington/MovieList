import React from 'react';
import base from '../base.js';
import "./css/MovieSite.css"
import Header from './Header.js';
import MovieList from './MovieList.js';
import AddMovie from './AddMovie.js';

class MovieSite extends React.Component {
    state = {
        listName: "",
        movies: []
    };

    componentDidMount() {
        base.syncState(`${this.props.match.params.listID}/movies`, { context: this, state: "movies" })
        base.syncState(`${this.props.match.params.listID}/listName`, { context: this, state: "listName" })
    }

    addMovie = movie => {
        let movies = [...this.state.movies];
        movies.push(movie);
        this.setState({
            movies
        })
    }

    switchViewedState = movieIMDB => {
        let movies = [...this.state.movies];
        movies.forEach(m => {
            if (m.imdb === movieIMDB) {
                m.viewed = m.viewed ? false : true
            }
        })
        this.setState({
            movies
        })
    }

    render() {
        if (this.props.match.path === "/:listID/add") return <AddMovie listName={this.state.listName} addMovie={this.addMovie}></AddMovie>
        let showViewed = (this.props.match.path === "/:listID/viewed")
        return (
            <React.Fragment>
                <Header listName={this.state.listName} movies={this.state.movies} showViewed={showViewed} showUnviewed={!showViewed}></Header>
                <MovieList movies={this.state.movies} showViewed={showViewed} showUnviewed={!showViewed} switchViewedState={this.switchViewedState}></MovieList>
            </React.Fragment>
        );
    }
}

export default MovieSite;