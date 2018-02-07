import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map(book => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
            );
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    // Whatever is returned will show up as props inside of BookList
    // whenever State changes, component will re-render
    return {
        books: state.books
    }
}

// creates Container out of Reducer & Component
export default connect(mapStateToProps)(BookList);