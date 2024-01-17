import { useState } from "react";
import CarUnit from "./CarUnit";
import { carUnitData } from "../utilities/CarUnitData";

const CarSelectSection = () => {
  const [activeCarID, setActiveCarID] = useState(1);

  const handleToggle = (id: number) => {
    setActiveCarID(id);
  };

  const handleCarUnits = () => {
    return carUnitData.map((unit) => {
      return (
        <CarUnit
          key={unit.id}
          car={unit}
          handleToggle={handleToggle}
          activeCarID={activeCarID}
        />
      );
    });
  };
  return (
    <div className="flex flex-col gap-2 rounded-t-xl border-whiteHover bg-white">
      <h1 className="border-b-2 pb-4 pt-5 text-center font-medium">
        Select a Ride
      </h1>
      <h2 className="text-2xl font-bold">Recomended</h2>
      <div className="grid grid-cols-1 gap-1 p-4">{handleCarUnits()}</div>
    </div>
  );
};

export default CarSelectSection;
