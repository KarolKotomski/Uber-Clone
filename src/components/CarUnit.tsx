import { Car } from "../utilities/CarUnitData";
import Person from "./icons/Person";

type Props = {
  car: Car;
  handleToggle: (id: number) => void;
  activeCarID: number;
};

const CarUnit = ({ car, handleToggle, activeCarID }: Props) => {
  return (
    <div
      className={`${
        activeCarID === car.id ? "border-black" : "border-white"
      } flex cursor-pointer gap-2 rounded-xl border-[0.1875rem]`}
      onClick={() => handleToggle(car.id)}
    >
      <div className="flex w-[5.5rem] shrink-0 items-center">
        <img src={car.image} alt="car" />
      </div>
      <div className="flex w-full justify-between py-4 pr-4">
        <div className="flex flex-col justify-between">
          <div className="flex gap-2">
            <p className="text-lg font-medium">{car.name}</p>
            <div className="flex items-center">
              <Person />
              <p className="text-sm">{car.seat}</p>
            </div>
          </div>
          <p className="text-sm">Time travel</p>
          <p className="text-sm text-greyActive">{car.description}</p>
        </div>
        <div className="flex items-center pl-4 text-lg font-medium">
          300 pln
        </div>
      </div>
    </div>
  );
};

export default CarUnit;