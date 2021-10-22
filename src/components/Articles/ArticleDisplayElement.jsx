import { useState, useEffect } from "react";
import { getArticleById } from "../../utils/api";
import { GiTechnoHeart } from "react-icons/gi";
import { FaComment } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function ArticleDisplayElement({ article_id }) {
  const [article, setArticle] = useState({});

  const [error, setError] = useState(null);
  const [date, setDate] = useState(null);

  useEffect(() => {
    setError(null);
    getArticleById(article_id)
      .then((response) => {
        setArticle(response);
        let parsedDate = new Date(Date.parse(article.created_at))
    
        setDate(parsedDate.toDateString());
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  }, []);
  if (error) {
    return <>Article does not exist</>;
  }

  return (
    <div className="card mb-3">
      <div className="card-header p-1">
        <h1 className="tag is-medium is-primary ">{article.author}</h1>
        <time className="ml-5 tag is-medium is-info is-light">
        {date}
        </time>
      </div>
      <div className="card-content">
        <p className="title">
          <Link
            className="has-text-dark"
            to={`/articles/${article.article_id}`}
          >
            {article.title}
          </Link>
        </p>
      </div>
      <div className="card-footer p-1">
        <p className="tag is-medium is-primary is-light">
          {"#" + article.topic}
        </p>
        <span className="ml-1 tag is-medium">
          <GiTechnoHeart />
          {article.votes}
        </span>
        <span className="ml-1 tag is-medium">
          <FaComment />
          {article.comment_count}
        </span>
      </div>
    </div>
  );
}
