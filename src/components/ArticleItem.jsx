import React from 'react';

const ArticleItem = ({ article }) => {
	return (
		<div className="card">
			<div className="card-img"><img src={article.image} alt="{article.title}" /></div>
			<div className="card-title">{article.title}</div>
			<div className="card-content">{article.content}</div>
		</div>
	);
}

export default ArticleItem;
