import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type NavState = {
  origin: string | null;
  destination: string | null;
  travelTimeInformation: string | null;
};

const initialState: NavState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action: PayloadAction<string>) => {
      state.origin = action.payload;
    },
    setDestination: (state, action: PayloadAction<string>) => {
      state.destination = action.payload;
    },
    setTravelTimeFunction: (state, action: PayloadAction<string>) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

//Actions:

export const { setOrigin, setDestination, setTravelTimeFunction } =
  navSlice.actions;

//Selectors:

export const selectOrigin = (state: RootState) => state.nav.origin;
export const selectDestination = (state: RootState) => state.nav.destination;
export const selectTravelTimeInformation = (state: RootState) =>
  state.nav.travelTimeInformation;

export default navSlice.reducer;
