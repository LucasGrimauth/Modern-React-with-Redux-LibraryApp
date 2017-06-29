import { combineReducers } from 'redux';
import BooksReducer from './reducer-books.js';

const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
