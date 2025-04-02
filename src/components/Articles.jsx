import { useEffect, useState } from "react";
import { getArticles } from "../api/api";
import ArticleItem from "./ArticleItem";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles()
      .then((articles) => {
        setArticles(articles);
      })
      .catch((error) => {
        console.log(error);
      });
    setIsLoading(false);
  }, []);
  return (
    <>
      {!isLoading ? (
        <section className="details">
          {articles && articles.length > 0
            ? articles.map((article) => {
                return (
                  <ArticleItem key={article.article_id} article={article} />
                );
              })
            : null}
        </section>
      ) : (
        <p>Loading..</p>
      )}
    </>
  );
}

export default Articles;
