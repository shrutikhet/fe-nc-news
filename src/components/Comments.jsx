import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getComments } from "../api/api";

import DeleteComment from "./DeleteComment";

function Comments() {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [delComment, setDelComment] = useState(false);
  useEffect(() => {
    getComments(article_id)
      .then((comments) => {
        setComments(comments);
        setDelComment(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [delComment]);

  return (
    <div>
      {comments.length > 0
        ? comments.map((comment) => {
            return (
              <div className="comments" key={comment.comment_id}>
                {comment.comment_id} {comment.body} {"  "}
                <DeleteComment
                  comment={comment}
                  setDelComment={setDelComment}
                />
              </div>
            );
          })
        : null}
    </div>
  );
}

export default Comments;
