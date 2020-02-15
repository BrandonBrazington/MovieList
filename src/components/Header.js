import React from 'react';
import PropTypes from 'prop-types';
import "./css/Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import HamburgerMenu from './HamburgerMenu.js';

class Header extends React.Component {
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
                <HamburgerMenu listID={this.props.listID} movies={this.props.movies} showViewed={this.props.showViewed} showUnviewed={this.props.showUnviewed}/>
            </header>
        )
    }
}

Header.propTypes = {
    listName: PropTypes.string.isRequired,
    movies: PropTypes.array,
    showViewed: PropTypes.bool,
    showUnviewed: PropTypes.bool,
    editListName: PropTypes.func.isRequired,
    listID: PropTypes.string.isRequired
}

export default Header;