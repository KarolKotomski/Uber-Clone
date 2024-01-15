import InputItem from "./InputItem";

type Props = {
  isRide: boolean;
  handleActiveMenu?: () => void;
};

const SearchPanel = ({ isRide, handleActiveMenu }: Props) => {
  return (
    <div className="relative mt-2 flex flex-col gap-3 lg:max-w-[25rem]">
      <div className="flex flex-col gap-3">
        <InputItem type="source" isRide={isRide} />
        <InputItem type="destination" isRide={isRide} />
      </div>

      {!isRide && (
        <div className="absolute bottom-[30%] left-5 top-[30%] w-[0.0625rem] bg-white"></div>
      )}
    </div>
  );
};

export default SearchPanel;
