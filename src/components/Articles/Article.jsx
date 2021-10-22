import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../contexts/User";
import { GiTechnoHeart } from "react-icons/gi";
import {
  getArticleById,
  patchArticleVoteCount,
  postArticleComment,
} from "../../utils/api";
import Comments from "./Comments";
import {
  FaArrowAltCircleDown,
  FaArrowAltCircleUp,
  FaArrowCircleDown,
} from "react-icons/fa";
const Article = () => {
  const { user, setUser } = useContext(UserContext);

  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  const [error, setError] = useState(null);
  const [votes, setVotes] = useState(0);

  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    setError(null);
    getArticleById(article_id)
      .then((response) => {
        setArticle(response);
        setVotes(response.votes);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  }, [article_id]);

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
    <div className="section">
      <h2>Article:</h2>
      <h3>{article.title}</h3>
      <p>{article.author}</p>
      <button className="button" onClick={incVotes}>
        <FaArrowAltCircleUp />
      </button>

      <GiTechnoHeart />
      {votes}

      <button className="button" onClick={decVotes}>
        {" "}
        <FaArrowAltCircleDown />
      </button>
      {user ? (
        <div>
          <label htmlFor="comment_box">Post comment as {user}</label>
          <textarea
            value={newComment}
            className="comment_box textarea"
            rows={3}
            cols={50}
            onChange={handleChange}
          ></textarea>
          <button className="button is-primary" onClick={postComment}>
            Submit
          </button>
        </div>
      ) : null}
      <Comments article_id={article_id} />
    </div>
  );
};

export default Article;
