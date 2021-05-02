import {createSelector} from '@reduxjs/toolkit';

const cartItemSelector = (state) => state.cartItems;

// count number of products in cart

export const cartItemsCountSelector = createSelector(
    cartItemSelector, 
    cartItems => cartItems.reduce(
        (count, item) => count + item.quantity, 0    
    )
);

// Calc total of cart
export const cartTotalSelector = createSelector(
    cartItemSelector, 
    cartItems => cartItems.reduce(
        (total, item) => total + (item.quantity * item.salePrice), 0    
    )
);