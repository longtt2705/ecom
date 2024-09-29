import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/user';
import alertReducer from '../slices/alerts';
import cartReducer from '../slices/cart';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';

// Create persist config
const persistConfig: PersistConfig<any> = {
  key: 'root',
  storage,
};

// Combine reducers (if there are others)
const rootReducer = combineReducers({
    user: userReducer,
    alerts: alertReducer,
    cart: cartReducer,
});

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer as any);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
