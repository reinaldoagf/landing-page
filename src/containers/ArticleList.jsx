import React from 'react';
import ArticleItem from '../components/ArticleItem';
import useGetArticles from '../hooks/useGetArticles';

const API = 'https://5eed24da4cbc340016330f0d.mockapi.io/api/articles';

const ArticleList = () => {
    const articles = useGetArticles(API)
    return (
        <section className="articles-container">
            {
                articles.map(e => (
                    <ArticleItem article={e} key={e.id} />
                ))
            }
        </section>
    );
}

export default ArticleList;