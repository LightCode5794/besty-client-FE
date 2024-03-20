import { Product, CartItem,  TemporaryBill } from '@/interfaces';
import { RootState } from '@/store/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { access, stat } from 'fs';

const initialState: TemporaryBill = {
    district: '',
    email: '',
    fullAddress: '',
    fullName: '',
    note: '',
    numberPhone: '',
    province: '',
    ward: '',
    products: [],
    totalAmount: 0,
};

export const billSlice = createSlice({
    name: 'bill',
    initialState,
    reducers: {
        setBill: (state, action: PayloadAction<TemporaryBill>) => {

            state.district = action.payload.district;
            state.email = action.payload.email;
            state.fullAddress = action.payload.fullAddress;
            state.note = action.payload.note;
            state.numberPhone = action.payload.numberPhone;
            state.province = action.payload.province;
            state.ward = action.payload.ward;
            state.fullName = action.payload.fullName;
            state.products = action.payload.products;
            state.totalAmount = action.payload.totalAmount;
            // console.log(state)

        },
        clearBill:() => initialState

    }
})

// Action creators are generated for each case reducer function
export const selectBill = (state: RootState) => state.bill

export const { setBill, clearBill } = billSlice.actions

export default billSlice.reducer