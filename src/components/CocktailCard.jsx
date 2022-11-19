import { Link } from 'react-router-dom';
import { routes } from '../routes';

export const CocktailCard = ({
  strDrinkThumb,
  strDrink,
  strGlass,
  idDrink,
}) => {
  return (
    <li className='text-center border rounded-xl'>
      <Link to={`${routes.COCKTAILS}/${idDrink}`}>
        <img
          className='rounded-xl'
          src={strDrinkThumb}
          alt={strDrink}
          loading='lazy'
          width='640'
        />
        <div className='p-2'>
          <h2 className='text-2xl font-medium'>{strDrink}</h2>
          <span className='block text-sm text-gray-500'>{strGlass}</span>
        </div>
      </Link>
    </li>
  );
};
