import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
import billReducer from './features/payment/billSlice'
import authReducer from './features/auth/authSlice'
import { persistReducer, persistStore } from 'redux-persist';
import { createPersistSessionStorage, createPersistStorage } from './persistStorage';
import pickedColorSlice from './features/slider/pickedColorSlice';




const persistConfig = {
    timeout: 100,
    key: 'root',
    storage: createPersistStorage(),
    expire:  60000, //30 * 60 * 1000,
    blacklist: ['bill', 'pickedColor', 'auth']

}

const authPersistConfig = {
    key: 'auth',
    storage: createPersistSessionStorage(),
  }
const rootReducer = combineReducers({
    // counter: counterReducer,
    auth: persistReducer(authPersistConfig, authReducer),
    cart: cartReducer,
    bill: billReducer,
    pickedColor: pickedColorSlice,

})


const persistedReducer = persistReducer(persistConfig, rootReducer)

export const makeStore = () => {
    return configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false,
          }),
    })
}
export const persistor = persistStore(makeStore());

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']