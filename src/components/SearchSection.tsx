import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectDestination, selectOrigin } from "../slices/navSlice";
import SearchPanel from "./SearchPanel";
import {
  SearchMenuContext,
  SearchMenuContextType,
} from "../context/SearchMenuContext";
import SearchButton from "./buttons/SearchButton";
import {
  CarSelectMenuContext,
  CarSelectMenuContextType,
} from "../context/CarSelectMenuContext";
import {
  SmallScreenContext,
  SmallScreenContextType,
} from "../context/SmallScreenContext";

const SearchSection = () => {
  const [isButtonActive, setIsButtonActive] = useState(false);

  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);

  const { isSearchMenuActive }: SearchMenuContextType =
    useContext(SearchMenuContext);

  const { setIsCarSelectMenuActive }: CarSelectMenuContextType =
    useContext(CarSelectMenuContext);

  const { isSmallScreen, setIsSmallScreen }: SmallScreenContextType =
    useContext(SmallScreenContext);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (origin && destination && !isSmallScreen) {
      setIsButtonActive(true);
    } else if (origin && destination && isSmallScreen) {
      setIsCarSelectMenuActive(true);
    } else {
      setIsButtonActive(false);
    }
  }, [origin, destination, isSmallScreen]);

  return (
    <div
      className={`flex flex-col gap-2 border-whiteHover bg-white lg:p-4 ${
        isSearchMenuActive ? "px-4" : "rounded-t-xl p-4"
      } lg:rounded-xl lg:border-2`}
    >
      <h1
        className={`font-UberMove text-xl font-bold lg:block ${
          isSearchMenuActive ? "hidden" : "block"
        }`}
      >
        Get a Ride
      </h1>

      <SearchPanel isRide={true} />
      {!isSmallScreen && <SearchButton isButtonActive={isButtonActive} />}
    </div>
  );
};

export default SearchSection;
