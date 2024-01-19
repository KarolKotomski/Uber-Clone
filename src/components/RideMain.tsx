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
      } max-w-[88rem] lg:absolute lg:bottom-10 lg:left-0 lg:right-0 lg:top-0 lg:grid-cols-[25rem,1fr] lg:gap-10 lg:pt-[6.75rem]`}
    >
      <map
        className={`${
          isSearchMenuActive && isSmallScreen && "hidden"
        } lg:relative lg:bottom-10 lg:right-0 lg:top-0 lg:pr-5`}
      >
        <GoogleMapSection />
      </map>
      <div className="flex flex-col overflow-y-scroll lg:-order-1 lg:gap-0">
        <div
          className={`bg-lightGrey2 lg:block lg:bg-white lg:pl-5 ${
            isCarSelectMenuActive && "hidden"
          } `}
        >
          <SearchSection />
        </div>
        {isCarSelectMenuActive && (
          <div className="overflow-y-scroll bg-lightGrey2 lg:bg-white lg:pl-5 lg:pt-5 xl:p-0">
            <CarSelectSection />
          </div>
        )}
      </div>
    </main>
  );
};

export default RideMain;
