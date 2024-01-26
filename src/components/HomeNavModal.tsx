import { useContext } from "react";
import StandardButton from "./buttons/StandardButton";
import Chevron from "./icons/Chevron";
import Mesh from "./icons/Mesh";
import { HomeNavModalContext } from "../context/HomeNavModalContext";
import HomeNavbarButton from "./buttons/HomeNavbarButton";
import Globe from "./icons/Globe";

const HomeNavModal = () => {
  const { isHomeNavModalActive } = useContext(HomeNavModalContext);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 top-[3.75rem] z-50 grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] ${isHomeNavModalActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
    >
      <div className="overflow-hidden bg-white px-6 text-black">
        <ul className="flex flex-col gap-6 py-4 text-[2rem] font-bold ">
          <li className="flex cursor-pointer items-center justify-between transition-colors hover:text-greyActive">
            <h2 className="font-UberMove">Company</h2>
            <span className="w-6">
              <Chevron />
            </span>
          </li>
          <li className="cursor-pointer transition-colors hover:text-greyActive">
            <h2 className="font-UberMove">Safety</h2>
          </li>
          <li className="cursor-pointer transition-colors hover:text-greyActive">
            <h2 className="font-UberMove">Help</h2>
          </li>
        </ul>
        <div className="mt-16">
          <StandardButton
            buttonStyle="grey"
            buttonText="Products"
            icon={<Mesh />}
            iconCustomStyle="w-[0.875rem]"
          />
          <div className="mt-6">
            <HomeNavbarButton
              buttonStyle="black/grey"
              labelText="EN"
              icon={<Globe />}
              iconOnTheLeft={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNavModal;
