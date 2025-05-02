import { Link } from "react-router";
function ArticleItem({ article }) {
  return (
    <>
      <Link to={`/articles/${article.article_id}`}>
        <div>
          <p>Author: {article.author}</p>
          <h4>Title: {article.title}</h4>
          <section>
            <img
              className="resize"
              src={article.article_img_url}
              alt="article image"
              loading="lazy"
            />
            <p>Votes: {article.votes}</p>
            <br />
          </section>
        </div>
      </Link>
    </>
  );
}

export default ArticleItem;
