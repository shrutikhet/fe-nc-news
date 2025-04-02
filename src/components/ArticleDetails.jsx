import { useParams } from "react-router";
import { getArticleDetails } from "../api/api";
import { useState, useEffect } from "react";

function ArticleDetails() {
  const { article_id } = useParams();
  const [articleDetails, setArticleDetails] = useState({});
  console.log(articleDetails.body);
  useEffect(() => {
    getArticleDetails(article_id)
      .then((data) => {
        setArticleDetails(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
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
      <span id="article-comment"> Comment: {articleDetails.comment_count}</span>
    </div>
  );
}

export default ArticleDetails;
