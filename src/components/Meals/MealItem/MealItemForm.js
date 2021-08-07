import { useRef, useContext } from 'react';

import AppButton from '../../UI/AppButton';
import AppInput from '../../UI/AppInput';
import classes from './MealItemForm.module.css';
import CartContext from '../../../data/CartContext';

const MealItemForm = (props) => {
    const CartCtx = useContext(CartContext);
    const inputRef = useRef();

    const addToCartButtonHandler = (event) => {
        console.log('MealItemForm:addToCartButtonHandler');
        event.preventDefault();
        CartCtx.addToCart(props.id, inputRef.current.value);
    };   

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
            <AppInput 
                label="Amount" 
                input={inputParms} 
                ref={inputRef}>
            </AppInput>
            <AppButton 
                onClick={addToCartButtonHandler} 
                >
            + Add</AppButton>
        </form>
    );
};

export default MealItemForm;
