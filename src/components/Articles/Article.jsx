import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getArticleById, patchArticleVoteCount } from "../../utils/api";
import Comments from "./Comments";

const Article = () => {
  

  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  const [error, setError] = useState(null);
  const [votes, setVotes] = useState(0);
  useEffect(() => {
    setError(null);
    getArticleById(article_id)
      .then((response) => {
        setArticle(response);
        setVotes(response.votes);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  }, [article_id]);

  if (error) {
    return <>Article does not exist</>;
  }

  function incVotes() {
    setVotes((currVotes) => currVotes + 1);
    
    patchArticleVoteCount(article_id, {inc_votes : 1})
      .then((response) => {
        setArticle(response);
        setVotes(response.votes);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  }

  function decVotes() {
    setVotes((currVotes) => currVotes - 1);

    patchArticleVoteCount(article_id, { inc_votes: -1 })
      .then((response) => {
        setArticle(response);
        setVotes(response.votes);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  }

  return (
    <div>
      <h2>Article:</h2>
      <h3>{article.title}</h3>
      <p>{article.author}</p>
      <button onClick={incVotes}>+</button>
      <p>{votes}</p>
      <button onClick={decVotes}> -</button>

      <Comments article_id={article_id} />
    </div>
  );
};

export default Article;
