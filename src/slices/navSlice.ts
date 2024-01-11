import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Option } from "react-google-places-autocomplete/build/types";

type LocationData = {
  placeData: Option;
  coordinates: {
    lat: number;
    lng: number;
  };
};

type NavState = {
  origin: LocationData | null;
  destination: LocationData | null;
  travelTimeInformation: google.maps.DirectionsResult | null;
};

export const initialState: NavState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (
      state,
      action: PayloadAction<{
        placeData: any;
        coordinates: { lat: number; lng: number };
      } | null>,
    ) => {
      state.origin = action.payload;
    },
    setDestination: (
      state,
      action: PayloadAction<{
        placeData: any;
        coordinates: { lat: number; lng: number };
      } | null>,
    ) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (
      state,
      action: PayloadAction<google.maps.DirectionsResult | null>,
    ) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

//Actions:

export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions;

//Selectors:

export const selectOrigin = (state: RootState) => state.nav.origin;
export const selectDestination = (state: RootState) => state.nav.destination;
export const selectTravelTimeInformation = (state: RootState) =>
  state.nav.travelTimeInformation;

export default navSlice.reducer;
