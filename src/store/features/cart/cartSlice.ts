import { Product, CartItem } from '@/interfaces';
import { RootState } from '@/store/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface CartState {
    numberCart: number;
    Carts: CartItem[]; // Replace 'any' with the appropriate type of the 'Carts' array
}

const initialState: CartState = {
    numberCart: 0,
    Carts: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action: PayloadAction<CartItem>) => {
            let check = false;
            let isInventory = true;
            state.Carts.map((item, key) => {
                if (item.id == action.payload.id &&
                    item.size == action.payload.size &&
                    item.colorId == action.payload.colorId
                ) {

                    const cart = state.Carts[key]
                    if (cart.quantity < cart.inventory) {
                        state.Carts[key].quantity++;
                    }
                    else {
                        isInventory = false;
                    }

                    check = true;
                }
            });

            if (!check) {
                let _cart: CartItem = {
                    ...action.payload
                }

                state.Carts.push(_cart);
            }

            if (isInventory) {
                state.numberCart++
            }


        },
        increment: (state, action: PayloadAction<number>) => {
            const itemKey = action.payload
            const curQuantity = state.Carts[itemKey].quantity;
            if (state.Carts[itemKey].inventory > curQuantity) {
                state.numberCart++
                state.Carts[itemKey].quantity++;
            }

        },

        decrement: (state, action: PayloadAction<number>) => {

            let quantity = state.Carts[action.payload].quantity;
            if (quantity > 1) {
                state.numberCart--;
                state.Carts[action.payload].quantity--;
            }
        },

        deleteCart: (state, action: PayloadAction<number>) => {
            let quantity_ = state.Carts[action.payload].quantity;
            const newListCarts = state.Carts.filter((item, index) => {
                return index != action.payload;
            })
            state.numberCart -= quantity_;
            state.Carts = newListCarts;
        },
        clearCart: () => initialState

    }
})

// Action creators are generated for each case reducer function
export const selectCart = (state: RootState) => state.cart
export const selectNumberCart = (state: RootState) => state.cart.numberCart

export const { addCart, increment, decrement, deleteCart, clearCart} = cartSlice.actions

export default cartSlice.reducer