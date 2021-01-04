import React from "react";

const Book = ({ imgSrc, title, author }) => {
	const onClick = () => {
		alert("Hello world!");
	};

	return (
		<article className="book">
			<img src={imgSrc} alt="" />
			<h1>{title}</h1>
			<h4>{author}</h4>
			<div className=""></div>
			<button type="button" onClick={onClick}>
				Click me ya bassss
			</button>
		</article>
	);
};

export default Book;
