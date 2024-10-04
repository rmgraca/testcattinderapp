import { configureStore } from '@reduxjs/toolkit';
import profilesReducer from '~app/stores/profilesSlice';
import { catApi } from '~services/catApi';

export const store = configureStore({
  reducer: {
    profiles: profilesReducer,
    [catApi.reducerPath]: catApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(catApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
