import { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectDestination,
  selectOrigin,
  selectDirections,
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

type Props = {
  findRide: () => void;
};

const SearchSection = ({ findRide }: Props) => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const directions = useSelector(selectDirections);

  const { isSearchMenuActive }: SearchMenuContextType =
    useContext(SearchMenuContext);

  const { isSmallScreen, setIsSmallScreen }: SmallScreenContextType =
    useContext(SmallScreenContext);

  const { setIsSearchButtonActive }: SearchButtonContextType =
    useContext(SearchButtonContext);

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
      setIsSearchButtonActive(true);
    } else if (origin && destination && isSmallScreen) {
      setIsSearchButtonActive(true);
      findRide();
    } else {
      setIsSearchButtonActive(false);
    }
  }, [origin, destination, isSmallScreen, directions]);

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
