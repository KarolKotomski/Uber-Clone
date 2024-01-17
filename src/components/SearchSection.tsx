import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectDestination, selectOrigin } from "../slices/navSlice";
import SearchPanel from "./SearchPanel";
import {
  SearchMenuContext,
  SearchMenuContextType,
} from "../context/SearchMenuContext";
import {
  CarSelectMenuContext,
  CarSelectMenuContextType,
} from "../context/CarSelectMenuContext";

const SearchSection = () => {
  const [isButtonActive, setIsButtonActive] = useState(false);

  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);

  const { isSearchMenuActive }: SearchMenuContextType =
    useContext(SearchMenuContext);
  const { setIsCarSelectMenuActive }: CarSelectMenuContextType =
    useContext(CarSelectMenuContext);

  useEffect(() => {
    if (origin && destination) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  }, [origin, destination]);

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
      <button
        className={`mt-3 hidden rounded-lg px-[0.875rem] py-3 font-medium transition-colors duration-300 lg:block ${
          isButtonActive
            ? "cursor-pointer bg-black text-white hover:bg-greyActive"
            : "cursor-not-allowed bg-lightGrey text-placeholderGrey"
        }`}
        onClick={() => setIsCarSelectMenuActive(true)}
      >
        Search
      </button>
    </div>
  );
};

export default SearchSection;
