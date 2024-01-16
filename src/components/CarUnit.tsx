import carPicture from "../images/Uber_Green.png";
import Person from "./icons/Person";

const CarUnit = () => {
  return (
    <div className="flex gap-2 rounded-xl border-[0.1875rem] border-black">
      <div className="flex w-[5.5rem] shrink-0 items-center">
        <img src={carPicture} alt="" />
      </div>
      <div className="flex w-full justify-between py-4 pr-4">
        <div className="flex flex-col justify-between">
          <div className="flex gap-2">
            <p className="text-lg font-medium">Green</p>
            <div className="flex items-center">
              <Person />
              <p className="text-sm">4</p>
            </div>
          </div>
          <p className="text-sm">Time travel</p>
          <p className="text-sm text-greyActive">
            Electric and hybrid vehicles
          </p>
        </div>
        <div className="flex items-center pl-4 text-lg font-medium">
          300 pln
        </div>
      </div>
    </div>
  );
};

export default CarUnit;
