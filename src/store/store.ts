import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
import billReducer from './features/payment/billSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { createPersistStorage } from './persistStorage';

const persistConfig = {
    timeout: 100,
    key: 'root',
    storage: createPersistStorage(),
    blacklist: ['bill']

}
const rootReducer = combineReducers({
    // counter: counterReducer,
    cart: cartReducer,
    bill: billReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const makeStore = () => {
    return configureStore({
        reducer: persistedReducer,
        middleware: [],
    })
}
export const persistor = persistStore(makeStore());

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']