import React, { useContext, useEffect, useState } from "react";
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";
import { GiTechnoHeart } from "react-icons/gi";
import { useParams } from "react-router-dom";
import { UserContext } from "../../contexts/User";
import {
  getArticleById,
  patchArticleVoteCount,
  postArticleComment
} from "../../utils/api";
import Comments from "./Comments";
const Article = () => {
  const { user } = useContext(UserContext);

  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  const [error, setError] = useState(null);
  const [votes, setVotes] = useState(0);
  const [date, setDate] = useState(null);

  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    setError(null);
    getArticleById(article_id)
      .then((response) => {
        setArticle(response);
        setVotes(response.votes);
        let parsedDate = new Date(Date.parse(article.created_at));
        setDate(parsedDate.toDateString());
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  }, [article_id, article.created_at]);

  if (error) {
    return <>Article does not exist</>;
  }

  function incVotes() {
    setVotes((currVotes) => currVotes + 1);

    patchArticleVoteCount(article_id, { inc_votes: 1 })
      .then((response) => {
        setArticle(response);
        setVotes(response.votes);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  }

  function decVotes() {
    setVotes((currVotes) => currVotes - 1);

    patchArticleVoteCount(article_id, { inc_votes: -1 })
      .then((response) => {
        setArticle(response);
        setVotes(response.votes);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  }

  const handleChange = (event) => {
    setNewComment(event.target.value);
  };

  const postComment = (event) => {
    if (newComment.length < 10) {
      alert("Comment too short");
      return;
    }

    const payload = {
      username: user,
      body: newComment,
    };
    postArticleComment(article_id, payload)
      .then((response) => {
        alert("Comment posted succesfuly");
      })
      .catch((err) => {
        console.log(err);
      });

    setNewComment("");
  };
  return (
    <div className="section ml-5 mr-5">
      <h2 className="title has-text-centered">{article.title}</h2>
      <div className="tag is-medium is-primary ">
        <p>by {article.author}</p>
      </div>
      <time className="ml-5 tag is-medium is-info is-light">{date}</time>

      {/* article content */}
      <div className="mt-5 mb-5 box has-text-left">{article.body}</div>

      {/* Voting on article */}
      <div className="mb-5">
        <button className="button mr-1 is-primary" onClick={incVotes}>
          <FaArrowAltCircleUp />
        </button>
        <div className="button is-danger is-light is-outlined">
          <GiTechnoHeart />
          {votes}
        </div>
        <button className="button ml-1 is-primary" onClick={decVotes}>
          <FaArrowAltCircleDown />
        </button>
      </div>

      {/* Comment box */}

      {user ? (
        <div>
          <label htmlFor="comment_box">Post comment as {user}</label>
          <textarea
            value={newComment}
            className="comment_box textarea is-primary mb-1"
            rows={3}
            cols={50}
            onChange={handleChange}
          ></textarea>
          <button className="button is-primary" onClick={postComment}>
            Submit
          </button>
        </div>
      ) : null}

      {/* Comments */}

      <Comments article_id={article_id} />
    </div>
  );
};

export default Article;
