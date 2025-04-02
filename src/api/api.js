import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-sh-14thmarch.onrender.com/",
  timeout: 1000,
});

export const getArticles = () => {
  return newsApi.get("/api/articles").then(({ data }) => {
    return data.articles;
  });
};

export const getTopics = () => {
  return newsApi.get("/api/topics").then(({ data }) => {
    return data.topics;
  });
};

export const getArticleDetails = (article_id) => {
  return newsApi.get(`/api/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getComments = (article_id) => {
  return newsApi
    .get(`/api/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data.comments;
    });
};
