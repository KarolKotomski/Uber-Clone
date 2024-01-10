import { useEffect, useState } from "react";
import InputItem from "./InputItem";
import { useSelector } from "react-redux";
import { selectDestination, selectOrigin } from "../slices/navSlice";

const SearchSection = () => {
  const [isButtonActive, setIsButtonActive] = useState(false);

  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);

  useEffect(() => {
    if (origin && destination) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  }, [origin, destination]);

  return (
    <div className="flex flex-col gap-4 rounded-t-xl border-whiteHover bg-white p-4 lg:rounded-xl lg:border-2">
      <h1 className="font-UberMove text-xl font-bold">Book a ride</h1>
      <div className="flex flex-col gap-3">
        <InputItem type="source" />
        <InputItem type="destination" />
      </div>
      <button
        className={`rounded-lg transition-colors duration-300 font-medium px-[0.875rem] py-3 lg:block ${
          isButtonActive
            ? "cursor-pointer bg-black text-white hover:bg-greyActive"
            : "cursor-not-allowed bg-lightGrey text-placeholderGrey"
        }`}
      >
        Search
      </button>
    </div>
  );
};

export default SearchSection;
