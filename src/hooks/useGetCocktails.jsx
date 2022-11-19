import { useEffect, useState } from 'react';
import * as API from '../api/cocktail-service';

export const useGetCocktails = () => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    const getCocktails = async () => {
      try {
        const response = await API.getTrendingCocktails();
        const normalizeResponse = await response.map(
          (cocktail) => cocktail.drinks[0]
        );

        setCocktails(normalizeResponse);
      } catch (error) {
        console.error(error);
      }
    };

    getCocktails();
  }, []);

  return { cocktails };
};
