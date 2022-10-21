import { configureStore } from '@reduxjs/toolkit';
import PeopleReducer from './slices/peopleSlice';

export default configureStore({
  reducer: {
    people: PeopleReducer,
  },
});
