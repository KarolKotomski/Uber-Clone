import { useContext } from "react";
import {
  CarSelectMenuContext,
  CarSelectMenuContextType,
} from "../../context/CarSelectMenuContext";

type Props = {
  isButtonActive: boolean;
};

const SearchButton = ({ isButtonActive }: Props) => {
  const { setIsCarSelectMenuActive }: CarSelectMenuContextType =
    useContext(CarSelectMenuContext);

  return (
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
  );
};

export default SearchButton;
