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
import {
  SmallScreenContext,
  SmallScreenContextType,
} from "../context/SmallScreenContext";
import {
  CarSelectMenuContext,
  CarSelectMenuContextType,
} from "../context/CarSelectMenuContext";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDestination,
  selectOrigin,
  setDestination,
  setOrigin,
} from "../slices/navSlice";

const RideNavbar = () => {
  const { isSearchMenuActive, setIsSearchMenuActive }: SearchMenuContextType =
    useContext(SearchMenuContext);

  const { isSmallScreen }: SmallScreenContextType =
    useContext(SmallScreenContext);

  const {
    isCarSelectMenuActive,
    setIsCarSelectMenuActive,
  }: CarSelectMenuContextType = useContext(CarSelectMenuContext);

  const dispatch = useDispatch();
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);

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
                {!isSearchMenuActive &&
                  !isCarSelectMenuActive &&
                  isSmallScreen && (
                    <span className="mr-20 font-UberMove text-xl lg:text-3xl">
                      Uber
                    </span>
                  )}
              </Link>
            </li>
            {isSearchMenuActive && isSmallScreen && (
              <li
                onClick={() => {
                  setIsSearchMenuActive(false);
                  if (origin && destination) {
                    dispatch(setDestination(null));
                  }
                }}
              >
                <ArrowButton />
              </li>
            )}
            {isCarSelectMenuActive && isSmallScreen && (
              <li
                onClick={() => {
                  setIsCarSelectMenuActive(false);
                  setIsSearchMenuActive(true);
                }}
              >
                <ArrowButton />
              </li>
            )}
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
