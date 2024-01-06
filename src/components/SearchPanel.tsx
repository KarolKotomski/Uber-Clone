import AutoCompleteField from "./AutoCompleteField";
import SearchArrow from "./icons/SearchArrow";
import SearchCircle from "./icons/SearchCircle";
import SearchSquare from "./icons/SearchSquare";

const SearchPanel = () => {
  return (
    <div className="relative mt-2 flex max-w-[25rem] flex-col gap-3">
      <div className="relative">
        <AutoCompleteField />
        <div className="absolute left-3 top-1/2 w-5 -translate-y-1/2 text-black">
          <SearchCircle />
        </div>
        <div className="absolute right-3 top-1/2 w-6 -translate-y-1/2 text-black">
          <SearchArrow />
        </div>
      </div>

      <div className="relative max-w-lg">
        <AutoCompleteField />
        <div className="absolute left-3 top-1/2 w-5 -translate-y-1/2 text-black">
          <SearchSquare />
        </div>
      </div>

      <div className="absolute bottom-[30%] left-5 top-[30%] w-[0.0625rem] bg-white"></div>
    </div>
  );
};

export default SearchPanel;
