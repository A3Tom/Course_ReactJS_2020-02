import React, { Component } from "react";

export default class App extends Component {
	render() {
		return (
			<section className="booklist">
				<Book imgSrc={firstBook.imgSrc} title={firstBook.title} author={firstBook.author} />
				<Book imgSrc={secondBook.imgSrc} title={secondBook.title} author={secondBook.author} />
			</section>
		);
	}
}

const Book = ({ imgSrc, title, author }) => {
	return (
		<article className="book">
			<img src={imgSrc} alt="" />
			<h1>{title}</h1>
			<h4>{author}</h4>
		</article>
	);
};

const firstBook = {
	imgSrc: "https://images-eu.ssl-images-amazon.com/images/I/613iawXyW6L._AC_UL200_SR200,200_.jpg",
	title: "Greenlights",
	author: "Matthew McConaughey",
};

const secondBook = {
	imgSrc: "https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL200_SR200,200_.jpg",
	title: "Atomic Habits",
	author: "James Clear",
};
