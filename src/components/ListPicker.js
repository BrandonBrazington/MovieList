import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import "./css/ListPicker.css"


function ListPicker(props) {
    return (
        <nav>
            <Link to="/brandon">Brandon</Link>
            <Link to="/megan">Megan</Link>
        </nav>
    );
}

ListPicker.propTypes = {
}

export default ListPicker;