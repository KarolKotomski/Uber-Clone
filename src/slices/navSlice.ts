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
  distance: number | null;
};

export const initialState: NavState = {
  origin: null,
  destination: null,
  directions: null,
  distance: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action: PayloadAction<LocationData | null>) => {
      state.origin = action.payload;
    },
    setDestination: (state, action: PayloadAction<LocationData | null>) => {
      state.destination = action.payload;
    },
    setDirections: (
      state,
      action: PayloadAction<google.maps.DirectionsResult | null | undefined>,
    ) => {
      state.directions = action.payload;
    },
    setDistance: (state, action: PayloadAction<number | null>) => {
      state.distance = action.payload;
    },
  },
});

//Actions:

export const { setOrigin, setDestination, setDirections, setDistance } =
  navSlice.actions;

//Selectors:

export const selectOrigin = (state: RootState) => state.nav.origin;
export const selectDestination = (state: RootState) => state.nav.destination;
export const selectDirections = (state: RootState) => state.nav.directions;
export const selectDistance = (state: RootState) => state.nav.distance;

export default navSlice.reducer;
