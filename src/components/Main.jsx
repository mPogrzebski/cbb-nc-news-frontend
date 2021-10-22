import { useEffect, useState } from "react";
import { FaUsersSlash } from "react-icons/fa";
import ArticleDisplayElement from "./Articles/ArticleDisplayElement";
import { getAllArticles } from "../utils/api";
const Main = () => {
  const [latestArticles, setLatestArticles] = useState([]);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    getAllArticles(limit)
      .then((articles) => {
        setLatestArticles(articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="section">
      {latestArticles.map((article) => {
        return (
          <div key={article.article_id}>
            <ArticleDisplayElement article_id={article.article_id} />
          </div>
        );
      })}
    </div>
  );
};

export default Main;
