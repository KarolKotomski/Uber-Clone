import InputItem from "./InputItem";

const SearchPanel = () => {
  return (
    <div className="relative mt-2 flex sm:max-w-[25rem] flex-col gap-3">
      <div className="flex flex-col gap-3">
        <InputItem type="source" />
        <InputItem type="destination" />
      </div>

      <div className="absolute bottom-[30%] left-5 top-[30%] w-[0.0625rem] bg-white"></div>
    </div>
  );
};

export default SearchPanel;
