import React from 'react';
import PropTypes from 'prop-types';
import "./css/AddMovie.css";
import Header from './Header.js'

class AddMovie extends React.Component {
    nameRef = React.createRef();
    yearRef = React.createRef();
    imdbRef = React.createRef();
    youtubeRef = React.createRef();
    ratingRef = React.createRef();
    imageRef = React.createRef();
    viewedRef = React.createRef();

    addMovie = event => {
        event.preventDefault();
        const movie = {
            name: this.nameRef.current.value,
            year: parseInt(this.yearRef.current.value),
            imdb: this.imdbRef.current.value,
            youtube: this.youtubeRef.current.value,
            rating: this.ratingRef.current.value,
            image: this.imageRef.current.value,
            viewed: (this.viewedRef.current.value === "true")
        }
        this.props.addMovie(movie);
        event.currentTarget.reset();
    }
    render() {
        return (
            <div>
                <Header listName={this.props.listName} />
                <h1>Add a Movie to the List</h1>
                <form id="add-movie-form" onSubmit={this.addMovie}>
                    <label htmlFor="name">Title/Name: </label>
                    <input name="name" ref={this.nameRef} type="text" placeholder="Unstoppable" />
                    <label htmlFor="year">Year: </label>
                    <input name="year" ref={this.yearRef} type="text" placeholder="2010" />
                    <label htmlFor="imdb">IMDB ID: </label>
                    <input name="imdb" ref={this.imdbRef} type="text" placeholder="tt0477080" />
                    <label htmlFor="youtube">YouTube ID: </label>
                    <input name="youtube" ref={this.youtubeRef} type="text" placeholder="fyuoIqeL-bc" />
                    <label htmlFor="rating">Rating (ex: PG-13): </label>
                    <input name="rating" ref={this.ratingRef} type="text" placeholder="PG-13" />
                    <label htmlFor="image">Poster Image URL: </label>
                    <input name="image" ref={this.imageRef} type="text" placeholder="https://upload.wikimedia.org/wikipedia/en/9/9e/Unstoppable_Poster.jpg" />
                    <label htmlFor="viewed">Viewed: </label>
                    <select name="viewed" ref={this.viewedRef} >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    <button type="submit">Add Movie</button>
                </form>
            </div>
        )
    }
}

AddMovie.propTypes = {
    listName: PropTypes.string.isRequired,
    addMovie: PropTypes.func.isRequired
}

export default AddMovie;