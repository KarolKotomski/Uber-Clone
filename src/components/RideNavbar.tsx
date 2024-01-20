import { Link } from "react-router-dom";
import RideNavbarButton from "./buttons/RideNavbarButton";
import Car from "./icons/Car";
import Package from "./icons/Package";
import Restaurant from "./icons/Restaurant";
import Ticket from "./icons/Ticket";
import UserButton from "./buttons/UserButton";
import HamburgerButton from "./buttons/HamburgerButton";
import { useContext } from "react";
import {
  SearchMenuContext,
  SearchMenuContextType,
} from "../context/SearchMenuContext";
import ArrowButton from "./buttons/ArrowButton";

const RideNavbar = () => {
  const { isSearchMenuActive, setIsSearchMenuActive }: SearchMenuContextType =
    useContext(SearchMenuContext)!;

  return (
    <header
      className={`${
        isSearchMenuActive ? "static" : "absolute"
      } left-0 right-0 top-0 z-10 border-whiteHover bg-transparent py-3 font-medium text-black lg:static lg:border-b-4 lg:bg-white`}
    >
      <div className="mx-auto flex max-w-[88rem] items-center justify-between px-4">
        <nav className="flex items-center text-sm">
          <ul>
            <li>
              <Link to="/">
                <span
                  className={`${
                    isSearchMenuActive ? "hidden" : "block"
                  } mr-20 font-UberMove text-xl lg:block lg:text-3xl`}
                >
                  Uber
                </span>
              </Link>
            </li>
            <li
              className={`lg:hidden ${isSearchMenuActive ? "block" : "hidden"}`}
              onClick={() => setIsSearchMenuActive(false)}
            >
              <ArrowButton />
            </li>
          </ul>
          <ul className="mx-6 hidden gap-8 leading-4 lg:flex">
            <li>
              <RideNavbarButton labelText="Ride" icon={<Car />} />
            </li>
            <li>
              <RideNavbarButton labelText="Uber Package" icon={<Package />} />
            </li>
            <li>
              <RideNavbarButton labelText="Uber Eats" icon={<Restaurant />} />
            </li>
          </ul>
        </nav>
        <nav>
          <ul className="flex items-center gap-4 text-sm leading-4">
            <li className="hidden lg:flex">
              <RideNavbarButton labelText="My trips" icon={<Ticket />} />
            </li>
            <li className="hidden lg:flex">
              <UserButton />
            </li>
            <li className="lg:hidden">
              <HamburgerButton />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default RideNavbar;
