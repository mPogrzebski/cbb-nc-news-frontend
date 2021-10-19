import React from 'react';
import ArticleDisplayElement from './Articles/ArticleDisplayElement';

const Main = () => {
    return (
        <div>
            <ArticleDisplayElement article_id={1}/>
            <ArticleDisplayElement article_id={2}/>
        </div>
    );
};

export default Main;