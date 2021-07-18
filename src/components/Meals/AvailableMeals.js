import classes from './AvailableMeals.module.css';
import DUMMY_MEALS from '../../data/dummy-meals.js';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(
        meal => <MealItem key={meal.id} mealData={meal} />
    );
    return (
        <section>
            <Card>
                <ul className={classes.meals}>{mealsList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;