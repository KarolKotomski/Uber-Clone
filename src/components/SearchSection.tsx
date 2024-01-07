import InputItem from "./InputItem";
import AutoCompleteField from "./InputItem";

const SearchSection = () => {
  return (
    <div className="flex flex-col gap-4 rounded-t-xl border-whiteHover bg-white p-4 lg:rounded-xl lg:border-2">
      <h1 className="font-UberMove text-xl font-bold">Book a ride</h1>
      <div className="flex flex-col gap-3">
        <InputItem type="source" />
        <InputItem type="destination" />
      </div>
      <button className="hidden cursor-not-allowed rounded-lg bg-lightGrey px-[0.875rem] py-3  text-placeholderGrey lg:block">
        Search
      </button>
    </div>
  );
};

export default SearchSection;
