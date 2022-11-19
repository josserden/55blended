import { CocktailCard } from '../components/CocktailCard';
import { useGetCocktails } from '../hooks/useGetCocktails';

export const Home = () => {
  const { cocktails } = useGetCocktails();

  return (
    <section className='py-8'>
      <div className='container'>
        <h1 className='text-center font-black text-gray-700 text-4xl mb-10'>
          Tranding coctails
        </h1>

        <ul className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center gap-4'>
          {cocktails &&
            cocktails.map(({ strDrinkThumb, strDrink, strGlass, idDrink }) => (
              <CocktailCard
                key={idDrink}
                strDrinkThumb={strDrinkThumb}
                strDrink={strDrink}
                strGlass={strGlass}
                idDrink={idDrink}
              />
            ))}
        </ul>
      </div>
    </section>
  );
};
