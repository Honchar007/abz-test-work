import { configureStore } from '@reduxjs/toolkit';

// apis
import { userApi } from './user.api';
import { positionsApi } from './positions.api';

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [positionsApi.reducerPath]: positionsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, positionsApi.middleware),
});
