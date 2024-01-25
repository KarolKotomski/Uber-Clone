import { useContext } from "react";
import { RideErrorScreenContext } from "../context/RideErrorScreenContext";
import CarSelectScreen from "./CarSelectScreen";
import RideErrorScreen from "./RideErrorScreen";

const RideResults = () => {
  const { isRideError } = useContext(RideErrorScreenContext);

  return (
    <div className="flex flex-col rounded-t-xl border-whiteHover bg-white">
      <h1 className="border-b-2 pb-4 pt-5 text-center font-UberMove font-medium lg:border-none lg:text-left lg:text-4xl lg:font-bold">
        Select a Ride
      </h1>
      {!isRideError ? <CarSelectScreen /> : <RideErrorScreen />}
    </div>
  );
};

export default RideResults;
