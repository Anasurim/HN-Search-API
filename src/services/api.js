import axios from 'axios';

export async function fetchArticles(searchQuery) {
  axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';

  const response = await axios.get(`/search_by_date?query=${searchQuery}`);
  return response.data.hits;
}
