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
        base.syncState(`${this.props.match.params.listID}/movies`, { context: this, state: "movies", defaultValue: [{
            name: "",
            year: 0,
            imdb: "",
            youtube: "-bc",
            rating: "",
            image: "",
            viewed: false
        }] })
        base.syncState(`${this.props.match.params.listID}/listName`, { context: this, state: "listName", defaultValue: "New"})
        // if (this.state.listName.length === 0) {
        //     this.setState({ listName: "New" });
        // }
        // if (!Array.isArray(this.state.moivies)) {
        //     this.setState({
        //         movies: [{
        //             name: "",
        //             year: 0,
        //             imdb: "",
        //             youtube: "-bc",
        //             rating: "",
        //             image: "",
        //             viewed: false
        //         }]
        //     })
        // }
    }

    editListName = newListName => {
        this.setState({listName: newListName})
    }

    addMovie = movie => {
        let movies = [...this.state.movies];
        if (movies[0].year === 0) {
            movies.splice(0,1);
        }
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
            <div className="movie-site">
                <Header listName={this.state.listName} movies={this.state.movies} showViewed={showViewed} showUnviewed={!showViewed} editListName={this.editListName}></Header>
                <MovieList movies={this.state.movies} showViewed={showViewed} showUnviewed={!showViewed} switchViewedState={this.switchViewedState} listID={this.props.match.params.listID}></MovieList>
            </div>
        );
    }
}

export default MovieSite;