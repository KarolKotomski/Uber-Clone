import SearchArrow from "./icons/SearchArrow";
import SearchCircle from "./icons/SearchCircle";
import SearchSquare from "./icons/SearchSquare";

const SearchPanel = () => {
  return (
    <div className="relative flex max-w-[25rem] flex-col gap-3 mt-2">
      <div className="relative">
        <input
          type="text"
          placeholder="Enter location"
          className="placeholder-placeholderGrey w-full rounded-lg border-2 border-black bg-lightGrey2 px-9 py-[0.625rem] text-black outline-none focus:border-lightGrey2 "
        />
        <div className="absolute left-3 top-1/2 w-5 -translate-y-1/2 text-black">
          <SearchCircle />
        </div>
        <div className="absolute right-3 top-1/2 w-6 -translate-y-1/2 text-black">
          <SearchArrow />
        </div>
      </div>

      <div className="relative max-w-lg">
        <input
          type="text"
          placeholder="Enter destination"
          className="placeholder-placeholderGrey w-full rounded-lg border-2 border-black bg-lightGrey2 px-9 py-[0.625rem] text-black outline-none focus:border-lightGrey2"
        />
        <div className="absolute left-3 top-1/2 w-5 -translate-y-1/2 text-black">
          <SearchSquare />
        </div>
      </div>

      <div className="absolute bottom-[30%] left-5 top-[30%] w-[0.0625rem] bg-white"></div>
    </div>
  );
};

export default SearchPanel;
