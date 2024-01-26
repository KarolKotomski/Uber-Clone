import { useContext } from "react";
import StandardButton from "./buttons/StandardButton";
import Chevron from "./icons/Chevron";
import Mesh from "./icons/Mesh";
import { HomeNavModalContext } from "../context/HomeNavModalContext";

const HomeNavModal = () => {
    const { isHomeNavModalActive } =
        useContext(HomeNavModalContext);
    
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 top-[3.75rem] z-50 grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] ${isHomeNavModalActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
    >
      <div className={`overflow-hidden bg-white p-6 text-black`}>
        <div className="flex flex-col gap-8  text-3xl font-bold">
          <div className="flex items-center justify-between">
            <h2 className="font-UberMove">Company</h2>
            <span className="w-6">
              <Chevron />
            </span>
          </div>
          <h2 className="font-UberMove">Safety</h2>
          <h2 className="font-UberMove">Help</h2>
        </div>
        <div className="mt-16">
          <StandardButton
            buttonStyle="grey"
            buttonText="Products"
            icon={<Mesh />}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeNavModal;
