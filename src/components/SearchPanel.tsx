import AutoCompleteField from "./AutoCompleteField";
import SearchArrow from "./icons/SearchArrow";

const SearchPanel = () => {
  return (
    <div className="relative mt-2 flex max-w-[25rem] flex-col gap-3">
      <AutoCompleteField />
      <div className="absolute right-3 top-[0.75rem] w-6 text-black">
        <SearchArrow />
      </div>

      <div className="relative max-w-lg">
        <AutoCompleteField />
      </div>

      <div className="absolute bottom-[30%] left-5 top-[30%] w-[0.0625rem] bg-white"></div>
    </div>
  );
};

export default SearchPanel;
