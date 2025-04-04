import { useEffect, useState } from "react";
import { getArticles } from "../api/api";
import ArticleItem from "./ArticleItem";
import { useSearchParams } from "react-router";

function Articles() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const column = searchParams.get("column_name");
  const value = searchParams.get("value");
  const params = {};
  column ? (params.column_name = `${column}`) : null;
  value ? (params.value = `${value}`) : null;

  useEffect(() => {
    getArticles(params)
      .then((articles) => {
        setArticles(articles);
      })
      .catch((error) => {
        console.log(error);
      });
    setIsLoading(false);
  }, [value]);
  return (
    <>
      {!isLoading ? (
        <section className="item3">
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
