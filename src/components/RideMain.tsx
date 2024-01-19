import SearchSection from "./SearchSection";
import GoogleMapSection from "./GoogleMapSection";
import { useContext, useEffect } from "react";
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
      className={`mx-auto grid ${
        !isSearchMenuActive && isSmallScreen && "h-screen"
      } max-w-[88rem] lg:px-5 lg:absolute lg:bottom-10 lg:left-0 lg:right-0 lg:top-0 lg:grid-cols-[25rem,1fr] lg:pt-[6.75rem]`}
    >
      <map
        className={`${
          isSearchMenuActive && isSmallScreen && "hidden"
        } lg:relative lg:bottom-10 lg:right-0 lg:top-0`}
      >
        <GoogleMapSection />
      </map>
      <div
        className={`grid lg:pr-10 lg:-order-1 lg:grid-cols-1 lg:gap-5 ${
          isCarSelectMenuActive && "overflow-y-scroll"
        }`}
      >
        <div
          className={`bg-lightGrey2 lg:block lg:bg-white ${
            isCarSelectMenuActive && "hidden"
          } `}
        >
          <SearchSection />
        </div>
        {isCarSelectMenuActive && (
          <div className="bg-lightGrey2 lg:bg-white">
            <CarSelectSection />
          </div>
        )}
      </div>
    </main>
  );
};

export default RideMain;
