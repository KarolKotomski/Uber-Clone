import SearchSection from "./SearchSection";
import GoogleMapSection from "./GoogleMapSection";
import { useContext, useEffect, useLayoutEffect } from "react";
import { SearchMenuContext } from "../context/SearchMenuContext";
import { RideResultsContext } from "../context/RideResultsContext";
import { SmallScreenContext } from "../context/SmallScreenContext";

import { RideErrorScreenContext } from "../context/RideErrorScreenContext";
import RideResults from "./RideResults";
import PayScreen from "./PayScreen";

const RideMain = () => {
  const { isRideError } = useContext(RideErrorScreenContext);
  const { isSearchMenuActive, setIsSearchMenuActive } =
    useContext(SearchMenuContext);
  const { isRideResultsActive } = useContext(RideResultsContext);
  const { isSmallScreen } = useContext(SmallScreenContext);

  useEffect(() => {
    if (isSearchMenuActive === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isSearchMenuActive]);

  useLayoutEffect(() => {
    const handleCloseMenu = () => {
      if (isSearchMenuActive && window.innerWidth >= 1024) {
        setIsSearchMenuActive(false);
      }
    };
    window.addEventListener("resize", handleCloseMenu);
    return () => {
      window.removeEventListener("resize", handleCloseMenu);
    };
  }, [window.innerWidth]);

  return (
    <main
      className={`relative mx-auto grid max-w-[110rem] ${
        !isSearchMenuActive && isSmallScreen && "h-screen"
      } ${
        isSmallScreen && isRideResultsActive
          ? "grid-rows-2"
          : "grid-rows-[1fr,auto]"
      } lg:absolute lg:bottom-0 lg:left-0 lg:right-0 lg:top-[6.75rem] lg:grid-cols-[25rem,1fr] lg:px-5`}
    >
      <map
        className={`${
          isSearchMenuActive && isSmallScreen && "hidden"
        } lg:right-0 lg:top-0 lg:mb-5`}
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
            {!isRideError && <PayScreen />}
          </div>
        )}
      </div>
    </main>
  );
};

export default RideMain;
