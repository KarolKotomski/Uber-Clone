import { useContext } from "react";
import CarUnit from "./CarUnit";
import { carUnitData } from "../utilities/CarUnitData";
import { ActiveCarContext } from "../context/ActiveCarContext";

const CarSelectScreen = () => {
  const { activeCarID, setActiveCarID } = useContext(ActiveCarContext);

  const handleCarUnits = () => {
    return carUnitData.map((unit) => {
      return (
        <li key={unit.id}>
          <CarUnit
            car={unit}
            handleToggle={handleToggle}
            activeCarID={activeCarID}
          />
        </li>
      );
    });
  };

  const handleToggle = (id: number) => {
    setActiveCarID(id);
  };

  return (
    <div className="mb-[7rem] p-2 xs:p-5 lg:mb-[9rem] lg:p-0">
      <h2 className="pb-4 font-UberMove text-2xl font-bold">Recommended</h2>
      <ul className="grid grid-cols-1 gap-1">{handleCarUnits()}</ul>
    </div>
  );
};

export default CarSelectScreen;
