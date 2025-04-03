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

export const changeVotes = (article_id, value) => {
  return newsApi
    .patch(`/api/articles/${article_id}`, { inc_votes: `${value}` })
    .then(({ data }) => {
      return data.articles;
    });
};

export const addComments = (
  article_id,
  { commentAdded, username = "tickle122" }
) => {
  return newsApi
    .post(`/api/articles/${article_id}/comments`, {
      username: `${username}`,
      body: `${commentAdded}`,
    })
    .then((data) => {
      console.log(data);
    });
};

export const deleteComments = (comment_id) => {
  return newsApi.delete(`/api/comments/${comment_id}`).then(({ data }) => {
    return data.comments;
  });
};
