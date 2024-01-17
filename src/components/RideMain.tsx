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

const RideMain = () => {
  const { isSearchMenuActive }: SearchMenuContextType =
    useContext(SearchMenuContext);
  const { isCarSelectMenuActive }: CarSelectMenuContextType =
    useContext(CarSelectMenuContext);

  return (
    <main
      className={`relative mx-auto flex ${
        !isSearchMenuActive && "h-screen"
      } max-w-[88rem] flex-col lg:flex-row-reverse lg:justify-between lg:gap-5 lg:py-10`}
    >
      <map
        className={`h-full lg:block ${
          isSearchMenuActive && "hidden"
        } lg:h-[83vh] lg:min-w-[20rem] lg:flex-1 lg:pr-5`}
      >
        <GoogleMapSection />
      </map>
      <div className="flex flex-col lg:gap-5 xl:flex-row">
        <div
          className={`bg-lightGrey2 lg:min-w-[24rem] lg:bg-white lg:px-5 ${
            isCarSelectMenuActive && "hidden"
          } lg:block`}
        >
          <SearchSection />
        </div>
        {isCarSelectMenuActive && (
          <div className="max-h-96 w-full bg-lightGrey2 lg:bg-white">
            <CarSelectSection />
          </div>
        )}
      </div>
    </main>
  );
};

export default RideMain;
