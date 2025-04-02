import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getComments } from "../api/api";

function Comments() {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getComments(article_id)
      .then((comments) => {
        setComments(comments);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {comments.length > 0
        ? comments.map((comment) => {
            return (
              <div className="comments">
                {comment.comment_id} {comment.body}
              </div>
            );
          })
        : null}
    </div>
  );
}

export default Comments;
