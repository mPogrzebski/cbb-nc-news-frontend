import { useEffect, useState } from "react";
import { FaComment } from "react-icons/fa";
import { GiTechnoHeart } from "react-icons/gi";
import { Link } from "react-router-dom";
import { getArticleById } from "../../utils/api";

export default function ArticleDisplayElement({ article }) {
  let parsedDate = new Date(Date.parse(article.created_at));

  let date = parsedDate.toDateString();


  return (
    <div className="card mb-3">
      <div className="card-header p-1">
        <h1 className="tag is-medium is-primary ">{article.author}</h1>
        <time className="ml-5 tag is-medium is-info is-light">{date}</time>
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
