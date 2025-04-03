import { deleteComments } from "../api/api";
import { Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function DeleteComment({ comment, setDelComment }) {
  console.log(comment);
  function handleDelete(event) {
    deleteComments(comment.comment_id)
      .then((data) => {
        setDelComment(true);
      })
      .catch((error) => {
        console.log(error);
        setDelComment(false);
      });
  }
  return (
    <Tooltip title="Delete Comment" placement="right-end">
      <DeleteIcon onClick={handleDelete} />
    </Tooltip>
  );
}

export default DeleteComment;
