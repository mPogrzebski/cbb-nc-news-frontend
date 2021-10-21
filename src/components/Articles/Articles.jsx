import React, { useEffect, useState } from "react";
import { getAllArticles } from "../../utils/api";
import { Link } from "react-router-dom";

const SortBy = {
  CREATED_AT: "created_at",
  COMMENT_COUNT: "comment_count",
  VOTES: "votes",
};

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [sort_by, setSort_by] = useState(SortBy.CREATED_AT);

  useEffect(() => {
    getAllArticles(limit, page, sort_by)
      .then((articles) => {
        setArticles(articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page, limit, sort_by]);

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

  function handleSortChange(event){
    setSort_by(event.target.value)
  }

  return (
    <div>
      <h2>All articles</h2>

    <label for='sort_by'>Sort by: </label>
    <select name="sort_by" className="sort_by" onChange={handleSortChange}>
      <option value={SortBy.CREATED_AT}>Created at</option>
      <option value={SortBy.COMMENT_COUNT}>Comment count</option>
      <option value={SortBy.VOTES}>Votes received</option>
    </select>

      <ul>
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <Link to={`/articles/${article.article_id}`}>
                <h3>{article.title}</h3>
              </Link>
              <p>
                 votes : {article.votes} | comments : {article.comment_count} |
                created at {article.created_at}
              </p>
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
