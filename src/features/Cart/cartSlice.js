import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        showMiniCart: false,
        cartItems: []
    },
    reducers: {
        showMiniCart(state) {
            state.showMiniCart = true;
        },

        hiddenMiniCart(state) {
            state.showMiniCart = false;
        },

        addToCart(state, action){
            const newItem = action.payload;

            const index = this.cartItems.findIndex(x => x.id === newItem.id);
            if(index.length >= 0){
                state.cartItems[index].quantity += newItem.quantity;
            }else{
                state.cartItems.push(newItem);
            }
        },

        setQuantity(state, action){
            const { id, quantity } = action.payload;

            // check exists item in cart
            const index = this.cartItems.filter(x => x.id === id);
            if(index.length >= 0)
                state.cartItems[index].quantity = quantity;
            
        },

        removeFromCart(state, action){
            const idNeedToRemove = action.payload;
            this.cartItems =  state.cartItems.filter(item => item.id !== idNeedToRemove);
        }
    }
});

const {actions, reducer} = cartSlice;
// Name export
export const {showMiniCart, hiddenMiniCart} = actions;
// Default export

export default reducer;