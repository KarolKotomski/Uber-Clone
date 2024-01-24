import { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectDestination,
  selectDirections,
  selectOrigin,
} from "../slices/navSlice";
import SearchPanel from "./SearchPanel";
import {
  SearchMenuContext,
  SearchMenuContextType,
} from "../context/SearchMenuContext";
import SearchButton from "./buttons/SearchButton";
import {
  SmallScreenContext,
  SmallScreenContextType,
} from "../context/SmallScreenContext";
import {
  SearchButtonContext,
  SearchButtonContextType,
} from "../context/SearchButtonContext";
import { MapContext, MapContextType } from "../context/MapContext";

const SearchSection = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const directions = useSelector(selectDirections);

  const { isSearchMenuActive }: SearchMenuContextType =
    useContext(SearchMenuContext);

  const { isSmallScreen, setIsSmallScreen }: SmallScreenContextType =
    useContext(SmallScreenContext);

  const { setIsSearchButtonActive }: SearchButtonContextType =
    useContext(SearchButtonContext);

  const { findRide }: MapContextType = useContext(MapContext);

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
    if (!origin || !destination) return;

    if (origin && destination) {
      setIsSearchButtonActive(true);
    }
  }, [origin, destination]);

  useEffect(() => {
    isSmallScreen && findRide();
  }, [directions, isSmallScreen]);

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
      {!isSmallScreen && (
        <div onClick={findRide}>
          <SearchButton />
        </div>
      )}
    </div>
  );
};

export default SearchSection;
