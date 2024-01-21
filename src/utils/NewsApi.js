import {
  APIkey,
  checkResponse,
  currentDate,
  previousWeek,
  newsApiUrl,
} from "../utils/constants";

export const getSearchResults = (keyword) => {
  return fetch(
    `${newsApiUrl}/v2/everything?q=${keyword}&from=${previousWeek}&to=${currentDate}&pageSize=100&apiKey=${APIkey}`
  ).then(checkResponse);
};
