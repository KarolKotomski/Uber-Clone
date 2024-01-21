import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { LatLng, Option } from "react-google-places-autocomplete/build/types";

type LocationData = {
  placeData: Option;
  coordinates: LatLng;
};

type NavState = {
  origin: LocationData | null;
  destination: LocationData | null;
  directions: google.maps.DirectionsResult | null | undefined;
};

export const initialState: NavState = {
  origin: null,
  destination: null,
  directions: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (
      state,
      action: PayloadAction<{
        placeData: Option;
        coordinates: LatLng;
      } | null>,
    ) => {
      state.origin = action.payload;
    },
    setDestination: (
      state,
      action: PayloadAction<{
        placeData: Option;
        coordinates: LatLng;
      } | null>,
    ) => {
      state.destination = action.payload;
    },
    setDirections: (
      state,
      action: PayloadAction<google.maps.DirectionsResult | null | undefined>,
    ) => {
      state.directions = action.payload;
    },
  },
});

//Actions:

export const { setOrigin, setDestination, setDirections } = navSlice.actions;

//Selectors:

export const selectOrigin = (state: RootState) => state.nav.origin;
export const selectDestination = (state: RootState) => state.nav.destination;
export const selectDirections = (state: RootState) => state.nav.directions;

export default navSlice.reducer;
