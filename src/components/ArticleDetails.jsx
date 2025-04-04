import { useParams } from "react-router";
import { changeVotes, getArticleDetails } from "../api/api";
import { useState, useEffect } from "react";
import Comments from "./Comments";
import CommentIcon from "@mui/icons-material/Comment";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import CommentBox from "./CommentBox";
import { Tooltip } from "@mui/material";

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
      return currentOptimisticVotes + 1;
    });
    changeVotes(article_id, 1)
      .then((data) => {})
      .catch((error) => {
        console.log(error);
        setOptimisticVotes((currentOptimisticVotes) => {
          return currentOptimisticVotes - 1;
        });
      });
  }

  function handleMinusVote() {
    setOptimisticVotes((currentOptimisticVotes) => {
      return currentOptimisticVotes - 1;
    });
    changeVotes(article_id, -1)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        setOptimisticVotes((currentOptimisticVotes) => {
          return currentOptimisticVotes + 1;
        });
      });
  }

  function handleClick() {
    setAddComment(true);
  }

  return (
    <section className="article-item">
      <img src={articleDetails.article_img_url} alt="soemthing else" />
      <br />
      <span id="article-title" className="title-bold">
        {articleDetails.title}
      </span>
      <br />
      <p id="article-body" className="color-title">
        {articleDetails.body}
      </p>
      <br />
      <span id="article-author" className="line-height">
        {" "}
        Author: {articleDetails.author}
      </span>
      <section className="item4">
        <span id="article-comment">
          Comment: {articleDetails.comment_count}
        </span>
        <br />
        <span>{articleDetails.votes + optimisticVotes}</span>
        <Tooltip title="Add Votes">
          <ThumbUpIcon onClick={handleAddVote} />
        </Tooltip>
        {"  "}

        <Tooltip title="decrese Votes">
          <ThumbDownIcon onClick={handleMinusVote} />
        </Tooltip>
        <br />
        <Tooltip title="Add Comment">
          <CommentIcon onClick={handleClick} />
        </Tooltip>
        {addComment && <CommentBox setAddComment={setAddComment} />}
      </section>
      <br />
      <Comments />
    </section>
  );
}

export default ArticleDetails;
