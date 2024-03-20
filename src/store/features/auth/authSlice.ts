import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store'
import { User } from '@/interfaces';


interface AuthState {
  user: User | null;
  token: string | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
  exp: number | null;
}


const initialState: AuthState = {
  user: null,
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
  exp: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<{ user: User; token: string, exp: number | null}>) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.error = null;
      state.exp = action.payload.exp;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
      state.error = null;
      state.exp = null;
    },
  },
});


export const selectUser = (state: RootState) => state.auth.user
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
//export const selectNumberCart = (state: RootState) => state.cart.numberCart
export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;