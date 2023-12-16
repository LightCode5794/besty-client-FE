import { Product, CartItem, ProductWithoutImages } from '@/interfaces';
import { RootState } from '@/store/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { access } from 'fs';

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
        addCart: (state, action) => {
            let check = false;
            state.Carts.map((item, key) => {
                if (item.id == action.payload.id &&
                    item.selectedSize == action.payload.selectedSize &&
                    item.selectedColor == action.payload.selectedColor
                ) {
                    state.Carts[key].quantity++;
                    check = true;
                }
            });
            if (!check) {

                let _cart: CartItem = {
                    id: action.payload.id,
                    quantity: 1,
                    name: action.payload.name,
                    image: action.payload.thumbnail,
                    price: action.payload.price,
                    selectedColor: action.payload.selectedColor,
                    selectedSize: action.payload.selectedSize
                }
                state.Carts.push(_cart);
            }
            state.numberCart++

        },
        increment: (state, action: PayloadAction<number>) => {
            state.numberCart++
            state.Carts[action.payload].quantity++;
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
        }

    }
})

// Action creators are generated for each case reducer function
export const selectCart = (state: RootState) => state.cart
export const selectNumberCart = (state: RootState) => state.cart.numberCart

export const { addCart, increment, decrement, deleteCart } = cartSlice.actions

export default cartSlice.reducer