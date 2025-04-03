import { useParams } from "react-router";
import { changeVotes, getArticleDetails } from "../api/api";
import { useState, useEffect } from "react";
import Comments from "./Comments";
import CommentIcon from "@mui/icons-material/Comment";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import CommentBox from "./CommentBox";

function ArticleDetails() {
  const { article_id } = useParams();
  const [articleDetails, setArticleDetails] = useState({});
  const [addComment, setAddComment] = useState(false);
  const [optimisticVotes, setOptimisticVotes] = useState(0);

  useEffect(() => {
    getArticleDetails(article_id)
      .then((data) => {
        setArticleDetails(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleAddVote() {
    setOptimisticVotes((currentOptimisticVotes) => {
      console.log("c p v:", currentOptimisticVotes);
      return currentOptimisticVotes + 1;
    });
    changeVotes(article_id, 1)
      .then((data) => {})
      .catch((error) => {
        console.log(error);
        setOptimisticVotes((currentOptimisticVotes) => {
          console.log("c p v:", currentOptimisticVotes);
          return currentOptimisticVotes - 1;
        });
      });
  }

  function handleMinusVote() {
    setOptimisticVotes((currentOptimisticVotes) => {
      console.log("c p v:", currentOptimisticVotes);
      return currentOptimisticVotes - 1;
    });
    changeVotes(article_id, -1)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        setOptimisticVotes((currentOptimisticVotes) => {
          console.log("c p v:", currentOptimisticVotes);
          return currentOptimisticVotes + 1;
        });
      });
  }

  function handleClick() {
    setAddComment(true);
  }

  return (
    <div className="details line-height color-bk">
      <span id="article-img">
        <img src={articleDetails.article_img_url} alt="soemthing else" />
      </span>
      <span id="article-title">{articleDetails.title}</span>
      <span id="article-body" className="color-title">
        {articleDetails.body}
      </span>

      <span id="article-author"> Author: {articleDetails.author}</span>
      <span id="article-comment">Comment: {articleDetails.comment_count}</span>
      <ThumbUpIcon onClick={handleAddVote} />
      <span>{articleDetails.votes + optimisticVotes}</span>
      <ThumbDownIcon onClick={handleMinusVote} />
      <CommentIcon onClick={handleClick} />
      {addComment && <CommentBox setAddComment={setAddComment} />}
      <Comments />
    </div>
  );
}

export default ArticleDetails;
