import { useState, useEffect } from "react";
import { getArticleById } from "../../utils/api";

export default function ArticleDisplayElement({article_id}) {
  const [article, setArticle] = useState({});
  const [author, setAuthor] = useState({})
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    getArticleById(article_id)
      .then((response) => {
        setArticle(response);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });



  }, []);
  if (error) {
    return <>Article does not exist</>;
  }

  return (<div>
      <p>{article.author}</p>
      <p>{article.created_at}</p>
      <p>{article.title}</p>
      <p>{'#'+article.topic}</p>
      <p>{article.votes}</p>
  </div>);
}
