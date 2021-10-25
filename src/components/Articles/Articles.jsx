import React, { useEffect, useState } from "react";
import { getAllArticles } from "../../utils/api";
import ArticleDisplayElement from "./ArticleDisplayElement";
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

  function handleSortChange(event) {
    setSort_by(event.target.value);
  }

  function handleLimitChange(event) {
    setLimit(event.target.value)
  }

  return (
    <div className="section">
      <h2 className="title has-text-centered">All articles</h2>

      <div className="block flex is-flex-direction-row ">
        {/* Sort by dropbox */}
        <div className="block  has-text-">
          <label className="label" htmlFor="sort_by">
            Sort by:{" "}
          </label>
          <div className="select is-primary">
            <select
              name="sort_by"
              className="sort_by"
              onChange={handleSortChange}
            >
              <option value={SortBy.CREATED_AT}>Created at</option>
              <option value={SortBy.COMMENT_COUNT}>Comment count</option>
              <option value={SortBy.VOTES}>Votes received</option>
            </select>
          </div>
        </div>

        {/* Limit dropbox */}
        <div className="block">
          <label className="label" htmlFor="limit">
            Articles per page:{" "}
          </label>
          <div className="select is-primary">
            <select
              name="limit"
              className="limit"
              onChange={handleLimitChange}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
            </select>
          </div>
        </div>
      </div>

      <ul>
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <ArticleDisplayElement article={article} />
            </li>
          );
        })}
      </ul>
      <button
        className="pagination-previous"
        onClick={prevPage}
        disabled={page <= 1}
      >
        Previous Page
      </button>
      <p>Page {page}</p>
      <button className="pagination-next" onClick={nextPage}>
        Next Page
      </button>
    </div>
  );
};

export default Articles;
