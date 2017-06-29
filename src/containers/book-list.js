import React, { Component } from 'react';
import { connect } from 'react-redux';//connect react and redux transforming the component into a container
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';//guarantees that the action passes through all the reducers

class BookList extends Component {
	renderList(){
		return this.props.books.map((book) => {
			return(
				<li 
					onClick={() => this.props.selectBook(book)} 
					key={book.title} 
					className="list-group-item">
					{book.title}
				</li>
			);
		});
	}

	render(){
		return(
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

function mapStateToProps(state){
	//return something that will show up as this.props
	return {
		books: state.books
	};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ selectBook: selectBook }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);