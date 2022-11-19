import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../api/cocktail-service';

export const CocktailDetail = () => {
  const [cocktail, setCocktail] = useState({});
  const { cocktailId } = useParams();

  useEffect(() => {
    const getCocktail = async () => {
      try {
        const response = await API.getCocktailDetail(cocktailId);
        setCocktail(response.drinks[0]);
      } catch (error) {
        console.error(error);
      }
    };

    getCocktail();
  }, []);

  console.log(cocktail);
  return (
    <section className='py-8'>
      <div className='container'>
        <h1 className='text-center font-black text-gray-700 text-4xl mb-10'>
          {cocktail.strDrink}
        </h1>

        {cocktail && (
          <div className='flex flex-col rounded-md shadow-sm lg:flex-row'>
            <img
              src={cocktail.strDrinkThumb}
              alt={cocktail.strDrink}
              className='aspect-video'
            />
            <div className='flex flex-col justify-center flex-1 p-6 '>
              <span className='text-xs uppercase text-gray-400'>
                {cocktail.strAlcoholic}
              </span>
              <h3 className='text-3xl font-bold'>{cocktail.strGlass}</h3>
              <p className='my-6 dark:text-gray-400'>
                {cocktail.strInstructionsDE}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

/*
dateModified
:
"2015-12-28 10:45:48"
idDrink
:
"17174"
strAlcoholic
:
"Alcoholic"
strCategory
:
"Cocktail"
strCreativeCommonsConfirmed
:
"Yes"
strDrink
:
"Cherry Electric Lemonade"
strDrinkAlternate
:
null
strDrinkThumb
:
"https://www.thecocktaildb.com/images/media/drink/tquyyt1451299548.jpg"
strGlass
:
"Pint glass"
strIBA
:
null
strImageAttribution
:
null
strImageSource
:
null
strIngredient1
:
"Gin"
strIngredient2
:
"Tequila"
strIngredient3
:
"Vodka"
strIngredient4
:
"White rum"
strIngredient5
:
"Triple Sec"
strIngredient6
:
"Cherry Grenadine"
strIngredient7
:
"Sweet and sour"
strIngredient8
:
"Club soda"
strIngredient9
:
null
strIngredient10
:
null
strIngredient11
:
null
strIngredient12
:
null
strIngredient13
:
null
strIngredient14
:
null
strIngredient15
:
null
strInstructions
:
"Now stir vigorously and then pour over a large cup of ice. Now drink it with a straw and stir occasionally."
strInstructionsDE
:
"Nun kräftig umrühren und dann über einen großen Becher Eis gießen. Nun mit einem Strohhalm trinken und gelegentlich umrühren."
strInstructionsES
:
null
strInstructionsFR
:
null
strInstructionsIT
:
"Ora mescola energicamente e poi versa sopra una grande tazza di ghiaccio.\r\nOra bevilo con una cannuccia e mescola di tanto in tanto."
strInstructionsZH-HANS
:
null
strInstructionsZH-HANT
:
null
strMeasure1
:
"1 oz"
strMeasure2
:
"1 oz"
strMeasure3
:
"1 oz"
strMeasure4
:
"1 oz"
strMeasure5
:
"1 oz"
strMeasure6
:
"1 oz"
strMeasure7
:
"1 oz"
strMeasure8
:
"3 oz"
strMeasure9
:
null
strMeasure10
:
null
strMeasure11
:
null
strMeasure12
:
null
strMeasure13
:
null
strMeasure14
:
null
strMeasure15
:
null
strTags
:
null
strVideo
:
null



*/
