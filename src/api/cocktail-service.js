import axios from 'axios';
const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
axios.defaults.baseURL = 'https://www.thecocktaildb.com/api/json/v1/1';

const urls = Array.from({ length: 12 }, () => BASE_URL);

export const getTrendingCocktails = () => {
  const cocktails = Promise.all(
    urls.map(async (url) => {
      const { data } = await axios.get(url);

      return data;
    })
  );

  return cocktails;
};

export const getCocktailDetail = async (id) => {
  const { data } = await axios.get(`/lookup.php?i=${id}`);

  return data;
};
