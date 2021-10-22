import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlesByTopic } from "../../utils/api";
import ArticleDisplayElement from "../Articles/ArticleDisplayElement";
import { Link } from "react-router-dom";

export default function Topic() {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticlesByTopic(topic)
      .then((response) => {
        setArticles(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  if (articles === 0) {
    return <p>Loading....</p>;
  }

  return (
    <div className="section">
      <Link to={'/topics'}>
        <h2 className="mt-5 title has-text-centered is-size-2">Topics</h2>
      </Link>
      <h3 className="mt-5 title has-text-centered is-size-3">#{topic}</h3>
      <ul>
        {articles.map((article) => {
          return <ArticleDisplayElement key={article.article_id} article_id={article.article_id} />;

        })}
      </ul>
    </div>
  );
}
