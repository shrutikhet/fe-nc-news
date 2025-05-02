import { useParams } from "react-router";
import { changeVotes, getArticleDetails } from "../api/api";
import { useState, useEffect } from "react";
import Comments from "./Comments";
import CommentIcon from "@mui/icons-material/Comment";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import CommentBox from "./CommentBox";
import { Tooltip } from "@mui/material";
import Error from "./Error";

function ArticleDetails() {
  const { article_id } = useParams();
  const [articleDetails, setArticleDetails] = useState({});
  const [addComment, setAddComment] = useState(false);
  const [optimisticVotes, setOptimisticVotes] = useState(0);
  const [isError, setIsError] = useState(false);
  const [errMsg, setErrMsg] = useState({});

  useEffect(() => {
    getArticleDetails(article_id)
      .then((data) => {
        setIsError(false);
        setArticleDetails(data);
      })
      .catch((error) => {
        setIsError(true);
        setErrMsg(error.response.data);
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
    <>
      {!isError ? (
        <div className="item3">
          {" "}
          <section>
            <img
              src={articleDetails.article_img_url}
              alt="article image"
              loading="lazy"
              // className="resize"
            />
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
              Author: {articleDetails.author}{" "}
            </span>
          </section>
          <section className="item4">
            <span id="article-comment" class="total-comments">
              Comment: {articleDetails.comment_count}
            </span>

            <span class="voting">
              <Tooltip title="Add Votes">
                <ThumbUpIcon onClick={handleAddVote} />
              </Tooltip>
              <span>{articleDetails.votes + optimisticVotes}</span>

              <Tooltip title="decrese Votes">
                <ThumbDownIcon onClick={handleMinusVote} />
              </Tooltip>
            </span>
            <Tooltip title="Add Comment">
              <CommentIcon onClick={handleClick} />
            </Tooltip>
            {addComment && <CommentBox setAddComment={setAddComment} />}
          </section>
          <Comments />
        </div>
      ) : (
        <>
          <Error className="item3" errMsg={errMsg} />
        </>
      )}
    </>
  );
}

export default ArticleDetails;
