import SearchSection from "./SearchSection";
import GoogleMapSection from "./GoogleMapSection";
import { useContext } from "react";
import {
  SearchMenuContext,
  SearchMenuContextType,
} from "../context/SearchMenuContext";
import CarSelectSection from "./CarSelectSection";
import {
  CarSelectMenuContext,
  CarSelectMenuContextType,
} from "../context/CarSelectMenuContext";
import {
  SmallScreenContext,
  SmallScreenContextType,
} from "../context/SmallScreenContext";

const RideMain = () => {
  const { isSearchMenuActive }: SearchMenuContextType =
    useContext(SearchMenuContext);
  const { isCarSelectMenuActive }: CarSelectMenuContextType =
    useContext(CarSelectMenuContext);
  const { isSmallScreen }: SmallScreenContextType =
    useContext(SmallScreenContext);

  return (
    <main
      className={`mx-auto grid max-w-[88rem] ${
        !isSearchMenuActive && isSmallScreen && "h-screen"
      } ${
        isSmallScreen && isCarSelectMenuActive
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
          isCarSelectMenuActive ? "lg:pr-[1.5625rem]" : "lg:pr-10"
        } ${isCarSelectMenuActive && "overflow-y-scroll"}`}
      >
        <div
          className={`bg-lightGrey2 lg:block lg:bg-white ${
            isCarSelectMenuActive && "hidden"
          } `}
        >
          <SearchSection />
        </div>
        {isCarSelectMenuActive && (
          <div className="bg-lightGrey2 lg:bg-white lg:pt-5">
            <CarSelectSection />
          </div>
        )}
      </div>
    </main>
  );
};

export default RideMain;
