import React, { useContext } from "react";
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../data/CartContext';


const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);

    const cartButtonHandler = (event) => {
        console.log('HeaderCartButton:cartButtonHandler');
        event.preventDefault();
        cartCtx.showCart();
    };

    return (
        <button className={classes.button} onClick={cartButtonHandler}>
            <span className={classes.icon}><CartIcon/></span>
            <span>Your Cart</span>
            <span className={classes.badge}>3</span>
        </button>
    );
}

export default HeaderCartButton;