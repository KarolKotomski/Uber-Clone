import SearchSection from "./SearchSection";
import GoogleMapSection from "./GoogleMapSection";
import { useContext } from "react";
import {
  SmallScreenContext,
  SmallScreenContextType,
} from "../context/SmallScreenContext";
import CarSelectSection from "./CarSelectSection";

const RideMain = () => {
  const { isMenuActive }: SmallScreenContextType =
    useContext(SmallScreenContext)!;
  return (
    <main className="relative flex h-screen flex-col lg:container lg:h-full lg:flex-row-reverse lg:gap-5 lg:py-10">
      <map
        className={`block ${
          isMenuActive ? "h-0" : "h-full"
        } lg:h-[80vh] lg:w-full lg:pr-5`}
      >
        <GoogleMapSection />
      </map>
      {/* <div className="absolute bottom-[12rem] left-0 right-0 bg-lightGrey2">
        <CarSelectSection />
      </div> */}
      <div className="h-[300[px]] bg-lightGrey2 lg:w-1/3 lg:min-w-[22rem] lg:bg-white lg:px-5">
        <SearchSection />
      </div>
    </main>
  );
};

export default RideMain;
