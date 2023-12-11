import {
  APIkey,
  checkResponse,
  currentDate,
  previousWeek,
} from "../utils/constants";

export const getSearchResults = (keyword) => {
  return fetch(
    `https://newsapi.org/v2/everything?q=${keyword}&from=${previousWeek}&to=${currentDate}&pageSize=100&apiKey=${APIkey}`
  ).then(checkResponse);
};
