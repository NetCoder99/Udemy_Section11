import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
    const price = `$${props.mealData.price.toFixed(2)}`
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.mealData.name}</h3>
                <div className={classes.description}>{props.mealData.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id={props.mealData.id}></MealItemForm>
            </div>
        </li>
    )};

export default MealItem;
