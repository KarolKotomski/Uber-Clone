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
    <main className="relative mx-auto flex h-screen max-w-[88rem] flex-col lg:h-full lg:flex-row-reverse lg:gap-5 lg:py-10">
      <map
        className={`block ${
          isMenuActive ? "h-0" : "h-full"
        } lg:h-[83vh] lg:w-full lg:pr-5`}
      >
        <GoogleMapSection />
      </map>
      <div className="bg-lightGrey2 lg:bg-white">
        <CarSelectSection />
      </div>
      {/* <div className="bg-lightGrey2 lg:w-1/3 lg:min-w-[22rem] lg:bg-white lg:px-5">
        <SearchSection />
      </div> */}
    </main>
  );
};

export default RideMain;
