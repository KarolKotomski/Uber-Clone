import { createContext, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  selectDestination,
  selectDirections,
  selectOrigin,
  setDirections,
  setDistance,
} from "../slices/navSlice";
import { LatLng } from "react-google-places-autocomplete/build/types";
import { SearchButtonContext } from "./SearchButtonContext";
import { RideErrorScreenContext } from "./RideErrorScreenContext";
import { RideResultsContext } from "./RideResultsContext";

type MapContextProps = {
  children: React.ReactNode;
};

export type MapContextType = {
  map: google.maps.Map | null;
  setMap: React.Dispatch<React.SetStateAction<google.maps.Map | null>>;
  centerMap: LatLng;
  setCenterMap: React.Dispatch<React.SetStateAction<LatLng>>;
  handleDirectionRoute: () => Promise<void>;
  findRide: () => void;
  fitMap: () => void;
};

export const defaultMapCenter = {
  lat: 52.231844543054066,
  lng: 21.006048641809247,
};

export const zoom = 15;

export const MapContext = createContext<MapContextType>({
  map: null,
  setMap: () => {},
  centerMap: defaultMapCenter,
  setCenterMap: () => {},
  handleDirectionRoute: async () => {},
  findRide: () => {},
  fitMap: () => {},
});

export const MapContextProvider = ({ children }: MapContextProps) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [centerMap, setCenterMap] = useState(defaultMapCenter);

  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const directions = useSelector(selectDirections);
  const dispatch = useDispatch();

  const { isSearchButtonActive } = useContext(SearchButtonContext);

  const { setIsRideError } = useContext(RideErrorScreenContext);

  const { setIsRideResultsActive } = useContext(RideResultsContext);

  const handleDirectionRoute = async () => {
    const directionService = new google.maps.DirectionsService();
    try {
      if (origin && destination) {
        const response = await directionService.route({
          origin: origin.coordinates,
          destination: destination.coordinates,
          travelMode: google.maps.TravelMode.DRIVING,
        });
        dispatch(setDirections(response));
      }
    } catch (error) {
      console.error("No route results error:", error);
      dispatch(setDirections(undefined));
      fitMap();
    }
  };

  const findRide = () => {
    if (isSearchButtonActive && directions) {
      setIsRideResultsActive(true);
      calculateDistance();
    } else if (isSearchButtonActive && directions === undefined) {
      setIsRideResultsActive(true);
      setIsRideError(true);
    } else if (isSearchButtonActive && directions === null) {
      return;
    }
  };

  const calculateDistance = () => {
    if (origin && destination) {
      const calculatedDistance =
        google.maps.geometry.spherical.computeDistanceBetween(
          origin.coordinates,
          destination.coordinates,
        );
      dispatch(setDistance(calculatedDistance / 1000));
    }
  };

  const fitMap = () => {
    const bounds = new google.maps.LatLngBounds();
    if (map) {
      origin && bounds.extend(new google.maps.LatLng(origin.coordinates));
      destination &&
        bounds.extend(new google.maps.LatLng(destination.coordinates));
      map.fitBounds(bounds);
    }
  };

  const value = {
    map,
    setMap,
    centerMap,
    setCenterMap,
    handleDirectionRoute,
    findRide,
    fitMap,
  };

  return <MapContext.Provider value={value}>{children}</MapContext.Provider>;
};
