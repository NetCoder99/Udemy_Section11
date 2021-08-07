import React, {useState} from 'react';

const CartContext = React.createContext({
}); 
function createCartItem(cartId, mealId, amount) {
    return { cartId, mealId, amount };
}

// ------------------------------------------------------------------------
function getNextCartId(cartContents) {
    if (!cartContents) { return 1;}
    const crntMaxId = Math.max(...cartContents.map(o => o.cartId), 0);
    return crntMaxId+1;
};

// ------------------------------------------------------------------------
export const CartContextProvider = (props) => {
    // ---------------------------------------------------------
    const [isCartVisible, setIsCartVisible]  = useState(false);
    const [cartContents,  setCartContents]   = useState([]);

    const showCartHandler  = () => {
        console.log("CartContextProvider:showCartHandler");
        setIsCartVisible(true);
    };
    const hideCartHandler  = () => {
        console.log("CartContextProvider:hideCartHandler");
        setIsCartVisible(false);
    };
    
    const addToCartHandler  = (inpMealId, amount) => {
        const cartMealIndex = cartContents.findIndex(cs => {
           return  cs.mealId === inpMealId
        } );

        if (cartMealIndex > -1){
            const existingCartItem = cartContents[cartMealIndex];
            existingCartItem.amount = (+existingCartItem.amount) + (+amount);

            //const tmpCartData = cartContents.slice();
            //tmpCartData[cartMealIndex] = {...tmpCartData[cartMealIndex],amount: (+tmpCartData[cartMealIndex].amount) + (+amount)};
            //setCartContents(tmpCartData);
            console.log("= = = = = = = = = = = = = = = = = =");
            cartContents.map(cartItem => {console.log(cartItem); return null;});
        }
        else {
            const nextCartId  = getNextCartId(cartContents);
            const newCartItem = createCartItem(nextCartId, inpMealId, amount);
            const tmpCartData = [...cartContents, newCartItem];
            setCartContents(tmpCartData);
            console.log("- - - - - - - - - - - - - - ");
            cartContents.map(cartItem => {console.log(cartItem); return null;});
        }

    };

    // ---------------------------------------------------------
    const contextValue = {
        cartContents: cartContents,
        isCartVisible: isCartVisible,
        showCart: showCartHandler,
        hideCart: hideCartHandler,
        addToCart: addToCartHandler
    };
    return <CartContext.Provider value={contextValue}>{props.children}</CartContext.Provider>
};

export default CartContext;