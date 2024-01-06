import AutoCompleteField from "./AutoCompleteField";
import userPicture from "../images/user.jpeg";

const RideMain = () => {
  return (
    <main className="gap-8 lg:container lg:flex lg:flex-row-reverse lg:py-10">
      <map name="" className="h-full flex-1 lg:pr-5">
        <img src={userPicture} alt="" className="w-full" />
      </map>
      <div className="fixed bottom-0 left-0 right-0 bg-lightGrey2 lg:static lg:w-1/3 lg:min-w-[22rem] lg:bg-white lg:px-5">
        <div className="flex flex-col gap-4 rounded-t-xl border-whiteHover bg-white p-4 lg:rounded-xl lg:border-2">
          <h1 className="font-UberMove text-xl font-bold">Book a ride</h1>
          <div className="flex flex-col gap-3">
            <AutoCompleteField />
            <AutoCompleteField />
          </div>
          <button className="hidden cursor-not-allowed rounded-lg bg-lightGrey px-[0.875rem] py-3  text-placeholderGrey lg:block">
            Search
          </button>
        </div>
      </div>
    </main>
  );
};

export default RideMain;
