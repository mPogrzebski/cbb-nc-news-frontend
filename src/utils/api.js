import axios from "axios";

const newsAPI = axios.create({
  baseURL: "https://cbb-news.herokuapp.com/api",
});

export const getAllArticles = () => {
  return newsAPI.get("/articles").then((response) => {
    return response.data.articles;
  });
};


export const getAllTopics = () =>{
  return newsAPI.get('/topics').then(response =>{
    return response.data.topics;
  })
}

export const getArticleById = (article_id) =>{
  return newsAPI.get(`/articles/${article_id}`).then(response=>{
    return response.data.article;
  })
}

export const getCommentsByArticleId = (article_id) =>{
  return newsAPI.get(`/articles/${article_id}/comments`).then(response=>{
    return response.data.comments;
  })
}

