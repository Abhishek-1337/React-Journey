import MealItem from './MealsItem/MealItem';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import { useEffect } from 'react/cjs/react.production.min';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
];

const AvailableMeals = props => {

    useEffect(()=>{
      async function fetchMeals(){
        try{
          const response = await fetch('https://react-meals-2ea12-default-rtdb.firebaseio.com/meals.json');
          if (!response.ok) {
            throw new Error('Something went wrong!');
          }
          const data = await response.json();
          console.log(data);
        }
        catch(error){
          console.log('hello'+error);
        }
      }
      fetchMeals();
    },[]);

    const meals = DUMMY_MEALS.map((meal)=>
    <MealItem
    id={meal.id} 
    key={meal.id}
    name={meal.name}
    description={meal.description}
    price={meal.price}
    />
    )
    return (
        <section className={classes.meals}>
            <Card>
             <ul>
                 {meals}
             </ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;