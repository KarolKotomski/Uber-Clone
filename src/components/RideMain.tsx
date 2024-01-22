import SearchSection from "./SearchSection";
import GoogleMapSection from "./GoogleMapSection";
import { useContext, useEffect } from "react";
import {
  SearchMenuContext,
  SearchMenuContextType,
} from "../context/SearchMenuContext";
import {
  RideResultsContext,
  RideResultsContextType,
} from "../context/RideResultsContext";
import {
  SmallScreenContext,
  SmallScreenContextType,
} from "../context/SmallScreenContext";
import { useSelector } from "react-redux";
import {
  selectDestination,
  selectDirections,
  selectOrigin,
  setDistance,
} from "../slices/navSlice";
import {
  SearchButtonContext,
  SearchButtonContextType,
} from "../context/SearchButtonContext";
import {
  RideErrorScreenContext,
  RideErrorScreenContextType,
} from "../context/RideErrorScreenContext";
import RideResults from "./RideResults";
import { useDispatch } from "react-redux";

const RideMain = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const directions = useSelector(selectDirections);
  const dispatch = useDispatch();

  const { isRideError, setIsRideError }: RideErrorScreenContextType =
    useContext(RideErrorScreenContext);
  const { isSearchMenuActive }: SearchMenuContextType =
    useContext(SearchMenuContext);
  const {
    isRideResultsActive,
    setIsRideResultsActive,
  }: RideResultsContextType = useContext(RideResultsContext);
  const { isSmallScreen }: SmallScreenContextType =
    useContext(SmallScreenContext);
  const { isSearchButtonActive }: SearchButtonContextType =
    useContext(SearchButtonContext);

  const calculateDistance = () => {
    if (origin && destination) {
      const distance = google.maps.geometry.spherical.computeDistanceBetween(
        origin.coordinates,
        destination.coordinates,
      );
      dispatch(setDistance(distance / 1000));
    }
  };

  const findRide = () => {
    if (isSearchButtonActive && directions) {
      calculateDistance();
      setIsRideResultsActive(true);
      console.log("wykonano1");
    } else if (isSearchButtonActive && !directions) {
      setIsRideResultsActive(true);
      setIsRideError(true);
      console.log("wykonano2");
    }
  };

  return (
    <main
      className={`mx-auto grid max-w-[88rem] ${
        !isSearchMenuActive && isSmallScreen && "h-screen"
      } ${
        isSmallScreen && isRideResultsActive
          ? "grid-rows-2"
          : "grid-rows-[1fr,auto]"
      } lg:absolute lg:bottom-10 lg:left-0 lg:right-0 lg:top-[6.75rem] lg:grid-cols-[25rem,1fr] lg:px-5`}
    >
      <map
        className={`${
          isSearchMenuActive && isSmallScreen && "hidden"
        } lg:bottom-10 lg:right-0 lg:top-0`}
      >
        <GoogleMapSection />
      </map>
      <div
        className={`lg:-order-1 lg:gap-5 ${
          isRideResultsActive ? "lg:pr-[1.5625rem]" : "lg:pr-10"
        } ${isRideResultsActive && "overflow-y-scroll"}`}
      >
        <div
          className={`bg-lightGrey2 lg:block lg:bg-white ${
            isRideResultsActive && "hidden"
          } `}
        >
          <SearchSection findRide={findRide} />
        </div>
        {isRideResultsActive && (
          <div
            className={`lg:bg-white lg:pt-5 ${
              isRideError ? "bg-white" : "bg-lightGrey2"
            }`}
          >
            <RideResults />
          </div>
        )}
      </div>
    </main>
  );
};

export default RideMain;
