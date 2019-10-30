import React from 'react';
// import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';
import "./css/ListPicker.css"

class ListPicker extends React.Component {
    myInput = React.createRef();

    goToList = (event) => {
        event.preventDefault();
        let listName = this.myInput.current.value
        this.props.history.push(`/${listName}`)
    }

    render() {
        return (
            <form id="list-picker" onSubmit={this.goToList}>
                <h2>Please Enter the List Name</h2>
                <input
                    type="text"
                    ref={this.myInput}
                    required placeholder="List Name"
                    defaultValue="brandon" />
                <button type="submit">Go To List</button>
            </form>
            // <nav>
            //     <Link to="/brandon">Brandon</Link>
            //     <Link to="/megan">Megan</Link>
            // </nav>
        );
    }
}

ListPicker.propTypes = {
}

export default ListPicker;