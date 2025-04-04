import { useEffect, useState } from "react";
import { getArticles } from "../api/api";
import ArticleItem from "./ArticleItem";
import { useSearchParams } from "react-router";
import Loading from "./Loading";

function Articles() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errMsg, setErrMsg] = useState({});

  const column = searchParams.get("column_name");
  const value = searchParams.get("value");
  const params = {};
  column ? (params.column_name = `${column}`) : null;
  value ? (params.value = `${value}`) : null;

  useEffect(() => {
    getArticles(params)
      .then((articles) => {
        setIsLoading(false);
        setIsError(false);
        setArticles(articles);
      })
      .catch((error) => {
        setErrMsg(error.response.data);
        setIsError(true);
      });
    setIsLoading(true);
  }, [value]);

  if (isError) {
    return <Error errMsg={errMsg} />;
  }
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
        <Loading />
      )}
    </>
  );
}

export default Articles;
