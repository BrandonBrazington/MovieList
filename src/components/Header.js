import React from 'react';
import PropTypes from 'prop-types';
import "./css/Header.css"

function Header(props) {
    return <header className="navbar-fixed-top"><h1>{props.listName} List</h1></header>
}

Header.propTypes = {
    listName: PropTypes.string.isRequired
}

export default Header;