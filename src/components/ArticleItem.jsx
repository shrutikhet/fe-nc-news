import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { Link } from "react-router";
function ArticleItem({ article }) {
  return (
    <>
      <Link to={`/articles/${article.article_id}`}>
        <div className="article-item">
          <p>Author: {article.author}</p>
          <h4>Title: {article.title}</h4>
          <section>
            <img
              className="resize"
              src={article.article_img_url}
              alt="article image"
              loading="lazy"
            />
            Votes: {article.votes}
            <ThumbUpIcon />
            <ThumbDownIcon />
          </section>
        </div>
      </Link>
    </>
  );
}

export default ArticleItem;
