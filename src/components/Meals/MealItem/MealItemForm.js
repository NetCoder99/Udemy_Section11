import AppButton from '../../UI/AppButton';
import AppInput from '../../UI/AppInput';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
    const inputParms = {
        id: 'amount' + props.id,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue:'1'
    };
    return (
        <form className={classes.form}>
            <AppInput label="Amount" input={inputParms}></AppInput>
            <AppButton>+ Add</AppButton>
        </form>
    );
};

export default MealItemForm;
