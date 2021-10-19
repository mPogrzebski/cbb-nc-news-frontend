import React, { useEffect, useState, } from 'react';
import { useParams } from 'react-router';
import { getArticleById } from '../../utils/api';
import Comments from './Comments';



const Article = () => {

    const [article, setArticle] = useState({})
    const {article_id} = useParams();
    const [error, setError] = useState(null)

    useEffect(()=>{
        setError(null);
        getArticleById(article_id).then(response=>{
            setArticle(response)
        }).catch(err=>{
            setError(err);
            console.log(err);
        })
    }, [])

    if(error){
        return <>Article does not exist</>
    }

    return (
        <div>
            <h2>Article</h2>
            {article.title}
            <Comments article_id={article_id}/>
        </div>
    );
};

export default Article;