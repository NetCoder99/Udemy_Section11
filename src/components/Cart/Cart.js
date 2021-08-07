import React, { useContext } from 'react';
import CartContext from '../../data/CartContext';

import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    console.log("+++++++++++++++++++++++++++++++++++");
    if (Array.isArray(cartCtx.cartContents))
    {cartCtx.cartContents.map(cartItem => {console.log(cartItem); return null;});}
    

    const hideCartButtonHandler = (event) => {
        console.log('Cart:hideCartButtonHandler');
        event.preventDefault();
        cartCtx.hideCart();
    };    

    const cartItems = <ul>
        {cartCtx.cartContents.map(
            item => <li key={item.mealId}>{item.mealId}:{item.amount}</li>
            )}
        </ul>;
    // const cartItems = <ul>{[{
    //     id: 'c1',
    //     name: 'Sushi',
    //     description: 'Finest fish and veggies',
    //     price: 22.99,
    //   }].map(item => <li key={item.id}>{item.name}</li>)
    // }</ul>;

    const actionArea =
        <React.Fragment>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>$999.99</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['.button--alt']} onClick={hideCartButtonHandler}>Close</button>
                <button className={classes['button']}>Order</button>
            </div>
        </React.Fragment>;

    return (
        <Modal>
            {cartItems}
            {actionArea}
        </Modal>
    )};
export default Cart;