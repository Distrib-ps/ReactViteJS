import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import { api } from './slices/apiSlice';

export default configureStore({
    reducer: {
        'counter': counterReducer,
        'api': api.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware)
});