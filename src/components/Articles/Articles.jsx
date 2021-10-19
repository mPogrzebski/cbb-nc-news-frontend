import React, { useEffect, useState } from "react";
import { getAllArticles } from "../../utils/api";

const Articles = () => {
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    getAllArticles()
      .then((articles) => {
        setAllArticles(articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>All articles</h2>
      <ul>
        {allArticles.map((article) => {
          return (
            <li key={article.article_id}>
              <p>{article.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Articles;
