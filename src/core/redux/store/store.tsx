import {configureStore} from '@reduxjs/toolkit';
import taskSlice from '../slices/taskSlice';
import listSlice from '../slices/listSlice';

/**
 * Store.
 */
export const store = configureStore({
  reducer: {
    tasks: taskSlice,
    lists: listSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
