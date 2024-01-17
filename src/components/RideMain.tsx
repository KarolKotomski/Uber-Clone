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
      className={`mx-auto flex ${
        !isSearchMenuActive && isSmallScreen && "h-screen"
      } max-w-[88rem] flex-col lg:flex-row-reverse lg:gap-10 lg:py-10`}
    >
      <map
        className={`h-full lg:block ${
          isSearchMenuActive && "hidden"
        } lg:h-[83vh] lg:min-w-[20rem] lg:flex-1 lg:pr-5`}
      >
        <GoogleMapSection />
      </map>
      <div className="flex flex-col lg:w-[23rem] lg:gap-0 xl:flex-row xl:gap-10">
        <div
          className={`bg-lightGrey2 lg:block lg:min-w-[23rem] lg:bg-white lg:pl-5 ${
            isCarSelectMenuActive && "hidden"
          } `}
        >
          <SearchSection />
        </div>
        {isCarSelectMenuActive && (
          <div className="w-full bg-lightGrey2 lg:bg-white lg:pl-5 lg:pt-5">
            <CarSelectSection />
          </div>
        )}
      </div>
    </main>
  );
};

export default RideMain;
