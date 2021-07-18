import React from "react";
import classes from './Header.module.css';
import MealsImg from '../Images/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton>Cart</HeaderCartButton>
            </header>
            <div className={classes['main-image']}>
                <img src={MealsImg} alt="Meals pic not found" />
            </div>
        </React.Fragment>
    );
}

export default Header;