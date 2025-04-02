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
    <div className="details">
      <span id="article-body">{articleDetails.body}</span>
    </div>
  );
}

export default ArticleDetails;
