import { createSlice } from '@reduxjs/toolkit';

interface PictureProps {
  thumbnail: string;
}

interface NameProps {
  first: string;
  last: string;
}

interface DateOfBirthProps {
  age: number;
}
interface LocationProps {
  city: string;
  state: string;
  postcode: string;
  country: string;
}

export interface ResultsProps {
  id: number;
  picture: PictureProps;
  name: NameProps;
  email: string;
  dob: DateOfBirthProps;
  phone: string;
  location: LocationProps;
}

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
      state.users = action.payload;
      state.loading = false;
    },
  },
});

export const { setPeople, setInitialLoad } = slice.actions;

export const getPeopleState = (state: any) => state;

export default slice.reducer;
