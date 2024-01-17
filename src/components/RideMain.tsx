import SearchSection from "./SearchSection";
import GoogleMapSection from "./GoogleMapSection";
import { useContext, useEffect } from "react";
import {
  SearchMenuContext,
  SearchMenuContextType,
} from "../context/SearchMenuContext";
import CarSelectSection from "./CarSelectSection";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../slices/navSlice";
import {
  CarSelectMenuContext,
  CarSelectMenuContextType,
} from "../context/CarSelectMenuContext";

const RideMain = () => {
  const { isSearchMenuActive }: SearchMenuContextType =
    useContext(SearchMenuContext);
  const { isCarSelectMenuActive }: CarSelectMenuContextType =
    useContext(CarSelectMenuContext);

  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <main
      className={`relative mx-auto flex ${
        !isSearchMenuActive && "h-screen"
      } max-w-[88rem] flex-col lg:flex-row-reverse lg:gap-5 lg:py-10`}
    >
      <map
        className={`h-full lg:block ${
          isSearchMenuActive && "hidden"
        } lg:h-[83vh] lg:w-full lg:pr-5`}
      >
        <GoogleMapSection />
      </map>
      <div>
        <div
          className={`bg-lightGrey2 lg:w-1/3 lg:min-w-[22rem] lg:bg-white lg:px-5 ${
            travelTimeInformation && isCarSelectMenuActive && "hidden"
          } lg:block`}
        >
          <SearchSection />
        </div>
        {isCarSelectMenuActive && travelTimeInformation && (
          <div className="h-full overflow-auto bg-lightGrey2 lg:h-[83vh] lg:bg-white">
            <CarSelectSection />
          </div>
        )}
      </div>
    </main>
  );
};

export default RideMain;
