import CarUnit from "./CarUnit";
import { carUnitData } from "../utilities/CarUnitData";

const CarSelectScreen = () => {
  const handleCarUnits = () => {
    return carUnitData.map((unit) => {
      return (
        <li key={unit.id}>
          <CarUnit car={unit} />
        </li>
      );
    });
  };

  return (
    <div className="mb-[7rem] p-2 xs:p-5 lg:mb-[9rem] lg:p-0">
      <h2 className="pb-4 font-UberMove text-2xl font-bold">Recommended</h2>
      <ul className="grid grid-cols-1 gap-1">{handleCarUnits()}</ul>
    </div>
  );
};

export default CarSelectScreen;
