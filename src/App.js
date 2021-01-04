import React, { Component } from "react";

import { books } from "./books";
import Book from "./Book";

export default class App extends Component {
	render() {
		return <section className="booklist">{bookList}</section>;
	}
}

const bookList = books.map((book) => {
	return <Book key={book.id} {...book} />;
});
