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
    <div className="flex flex-col rounded-t-xl border-whiteHover bg-white">
      <h1 className="border-b-2 pb-4 pt-5 text-center font-medium lg:hidden">
        Select a Ride
      </h1>
      <div className="p-5 lg:p-0">
        <h2 className="pb-4 font-UberMove text-2xl font-bold">Recommended</h2>
        <div className="grid grid-cols-1 gap-1">{handleCarUnits()}</div>
      </div>
    </div>
  );
};

export default CarSelectSection;
