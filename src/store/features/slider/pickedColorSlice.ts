import { Product, CartItem, TemporaryBill } from '@/interfaces';
import { RootState } from '@/store/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { access, stat } from 'fs';

const initialState = {
    color: 0 ,
};

export const pickedColorSlice = createSlice({
    name: 'pickedColor',
    initialState,
    reducers: {
        setPickedColor: (state, action: PayloadAction<number>) => {
            state.color = action.payload
           
        },
    }
})

// Action creators are generated for each case reducer function
export const selectPickedColor = (state: RootState) => state.pickedColor.color

export const { setPickedColor } = pickedColorSlice.actions

export default pickedColorSlice.reducer