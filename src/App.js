import React, { Component } from "react";

export default class App extends Component {
	render() {
		return <section className="booklist">{bookList}</section>;
	}
}

const Book = (props) => {
	const { imgSrc, title, author } = props;
	return (
		<article className="book">
			<img src={imgSrc} alt="" />
			<h1>{title}</h1>
			<h4>{author}</h4>
		</article>
	);
};

const books = [
	{
		id: 1,
		imgSrc: "https://images-eu.ssl-images-amazon.com/images/I/613iawXyW6L._AC_UL200_SR200,200_.jpg",
		title: "Greenlights",
		author: "Matthew McConaughey",
	},
	{
		id: 2,
		imgSrc: "https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL200_SR200,200_.jpg",
		title: "Atomic Habits",
		author: "James Clear",
	},
	{
		id: 3,
		imgSrc: "https://images-eu.ssl-images-amazon.com/images/I/81LrxW8HNJL._AC_UL200_SR200,200_.jpg",
		title: "Ottolenghi Flavour",
		author: "Yotam Ottolenghi",
	},
];

const bookList = books.map((book) => {
	return <Book key={book.id} {...book} />;
});
