import { useState } from "react";
import { useParams } from "react-router";
import { addComments } from "../api/api";
function CommentBox({ setAddComment }) {
  const { article_id } = useParams();
  const [commentAdded, setCommentAdded] = useState("");

  function handleChange(event) {
    setCommentAdded(event.target.value);
  }

  function handleAddComment() {
    addComments(article_id, { commentAdded })
      .then((data) => {
        setCommentAdded("");
        setAddComment(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleClose() {
    setAddComment(false);
  }

  return (
    <>
      <div class="divTable redTable">
        <div class="divTableHeading">
          <div class="divTableRow">
            <div class="divTableHead">Add Comment</div>
          </div>
        </div>
        <div class="divTableBody">
          <div class="divTableRow">
            <div class="divTableCell">
              <input type="text" onChange={handleChange} value={commentAdded} />
            </div>
          </div>
        </div>
      </div>
      <div class="redTable outerTableFooter">
        <div class="tableFootStyle">
          <div class="links">
            <button onClick={handleAddComment}>Add</button>{" "}
            <button onClick={handleClose}>Close</button>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default CommentBox;
