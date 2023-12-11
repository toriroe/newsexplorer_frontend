import {
  APIkey,
  checkResponse,
  currentDate,
  previousWeek,
} from "../utils/constants";

export const getSearchResults = (searchQ) => {
  return fetch(
    `https://newsapi.org/v2/everything?q=${searchQ}&from=${previousWeek}&to=${currentDate}&pageSize=100&apiKey=${APIkey}`
  ).then(checkResponse);
};
