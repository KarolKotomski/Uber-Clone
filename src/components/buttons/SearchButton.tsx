import { useContext } from "react";
import { SearchButtonContext } from "../../context/SearchButtonContext";

const SearchButton = () => {
  const { isSearchButtonActive } = useContext(SearchButtonContext);

  return (
    <button
      className={`mt-3 w-full rounded-lg px-[0.875rem] py-3 font-medium transition-colors duration-300 ${
        isSearchButtonActive
          ? "cursor-pointer bg-black text-white hover:bg-greyActive"
          : "cursor-not-allowed bg-lightGrey text-placeholderGrey"
      }`}
    >
      Search
    </button>
  );
};

export default SearchButton;
