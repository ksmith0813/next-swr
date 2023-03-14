import { createSlice } from '@reduxjs/toolkit';

type PictureProps = {
  thumbnail: string;
};

type NameProps = {
  first: string;
  last: string;
};

type DateOfBirthProps = {
  age: number;
};

type LocationProps = {
  city: string;
  state: string;
  postcode: string;
  country: string;
};

export type ResultsProps = {
  id: number;
  picture: PictureProps;
  name: NameProps;
  email: string;
  dob: DateOfBirthProps;
  phone: string;
  location: LocationProps;
};

export const slice = createSlice({
  name: 'people',
  initialState: {
    initialLoad: true,
    users: [],
  },
  reducers: {
    setInitialLoad: (state) => {
      state.initialLoad = false;
    },
    setPeople: (state: any, action: any) => {
      const users = action.payload;
      users.forEach((user: ResultsProps, index: number) => {
        user.id = index + 1;
      });
      state.users = action.payload;
    },
  },
});

export const { setPeople, setInitialLoad } = slice.actions;

export const getPeopleState = (state: any) => state;

export default slice.reducer;
