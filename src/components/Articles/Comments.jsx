import { useState, useEffect } from "react";
import { getCommentsByArticleId } from "../../utils/api";
import { GiTechnoHeart } from "react-icons/gi";

export default function Comments({ article_id }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsByArticleId(article_id)
      .then((response) => {
        setComments(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="section">
      <h2 className="is-size-5">Comments ({comments.length})</h2>
      <ul>
        {comments.map((comment) => {
          return (
            <li className="box" key={comment.comment_id}>
              <div className="mb-2 tag is-small is-primary ">{comment.author}</div>
              <div className="ml-1 tag is-small is-danger is-light">
                {comment.votes}
                <GiTechnoHeart />
              </div>

              <div>{comment.body}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
