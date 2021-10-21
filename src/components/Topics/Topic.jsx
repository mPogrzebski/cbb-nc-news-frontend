import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlesByTopic } from "../../utils/api";

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
    <div>
      <h2>{topic}</h2>
      <ul>
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <p>{article.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
