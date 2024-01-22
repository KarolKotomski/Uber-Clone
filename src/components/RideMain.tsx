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

import {
  RideErrorScreenContext,
  RideErrorScreenContextType,
} from "../context/RideErrorScreenContext";
import RideResults from "./RideResults";

const RideMain = () => {
  const { isRideError }: RideErrorScreenContextType = useContext(
    RideErrorScreenContext,
  );
  const { isSearchMenuActive }: SearchMenuContextType =
    useContext(SearchMenuContext);
  const { isRideResultsActive }: RideResultsContextType =
    useContext(RideResultsContext);
  const { isSmallScreen }: SmallScreenContextType =
    useContext(SmallScreenContext);

  useEffect(() => {
    console.log("rideResults", isRideResultsActive);
    console.log("RideError", isRideError);
  }, [isRideResultsActive, isRideError]);

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
          <SearchSection />
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
