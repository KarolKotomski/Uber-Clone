import { useContext } from "react";
import {
  RideErrorScreenContext,
  RideErrorScreenContextType,
} from "../context/RideErrorScreenContext";
import CarSelectScreen from "./CarSelectScreen";
import RideErrorScreen from "./RideErrorScreen";

const RideResults = () => {
  const { isRideError }: RideErrorScreenContextType = useContext(
    RideErrorScreenContext,
  );

  return (
    <div className="flex flex-col rounded-t-xl border-whiteHover bg-white">
      <h1 className="border-b-2 pb-4 pt-5 text-center font-medium">
        Select a Ride
      </h1>
      {!isRideError ? <CarSelectScreen /> : <RideErrorScreen />}
    </div>
  );
};

export default RideResults;
