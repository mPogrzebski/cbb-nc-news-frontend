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
    <div>
      {latestArticles.map((article) => {
        return (
          <li key={article.article_id}>
            <ArticleDisplayElement article_id={article.article_id}/>
          </li>
        );
      })}
    </div>
  );
};

export default Main;
