import React, { useEffect, useState } from "react";
import { getAllArticles } from "../../utils/api";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    getAllArticles(limit, page)
      .then((articles) => {
        setArticles(articles);
      })
      .catch((err) => {
        console.log(err);
      });

  }, [page, limit]);

  function prevPage() {
    setPage((currPage) => {
      return currPage - 1;
    });
  }

  function nextPage() {
    setPage((currPage) => {
      return currPage + 1;
    });
  }

  return (
    <div>
      <h2>All articles</h2>
      <ul>
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <p>{article.title}</p>
            </li>
          );
        })}
      </ul>
      <button onClick={prevPage} disabled={page <= 1}>
        Previous Page
      </button>
      <p>Page {page}</p>
      <button onClick={nextPage}>Next Page</button>
    </div>
  );
};

export default Articles;
