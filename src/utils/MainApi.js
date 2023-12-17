export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.newsexplorer.mnode.net"
    : "http://localhost:3001";

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};

/* -------------------------- GET articles request -------------------------- */

export const getSavedArticles = (token) => {
  return fetch(`${baseUrl}/articles`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};

/* ------------------------ POST new article request ------------------------ */

export const addSavedArticle = (article, token) => {
  return fetch(`${baseUrl}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(article),
  }).then(checkResponse);
};

/* ----------------------- DELETE saved artile request ---------------------- */

export const removeSavedArticle = (selectedArticle, token) => {
  return fetch(`${baseUrl}/articles/${selectedArticle._id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};
