import axios from "axios";

const newsAPI = axios.create({
  baseURL: "https://cbb-news.herokuapp.com/api",
});

export const getAllArticles = (limit,page) => {

  

  const offset = (page -1) * limit + 1
  console.log(offset)

  return newsAPI.get("/articles", {params:{limit, offset}}).then((response) => {
    return response.data.articles;
  });
};


export const getAllTopics = () =>{
  return newsAPI.get('/topics').then(response =>{
    return response.data.topics;
  })
}

export const getArticleById = (article_id) =>{
  return newsAPI.get(`/articles/${article_id}`).then((response)=>{
    return response.data.article;
  })
}

export const patchArticleVoteCount = (article_id, payload) => {
  console.log(payload)
  return newsAPI.patch(`/articles/${article_id}`,payload).then((response) =>{
    return response.data.article;
  })
}

export const getCommentsByArticleId = (article_id) =>{
  return newsAPI.get(`/articles/${article_id}/comments`).then(response=>{
    return response.data.comments;
  })
}


