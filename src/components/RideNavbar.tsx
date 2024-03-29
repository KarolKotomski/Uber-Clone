import { Link } from "react-router-dom";
import RideNavbarButton from "./buttons/RideNavbarButton";
import Car from "./icons/Car";
import Package from "./icons/Package";
import Restaurant from "./icons/Restaurant";
import Ticket from "./icons/Ticket";
import UserButton from "./buttons/UserButton";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { SearchMenuContext } from "../context/SearchMenuContext";
import ArrowButton from "./buttons/ArrowButton";
import { SmallScreenContext } from "../context/SmallScreenContext";
import { RideResultsContext } from "../context/RideResultsContext";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDestination,
  selectOrigin,
  setDestination,
} from "../slices/navSlice";
import { RideErrorScreenContext } from "../context/RideErrorScreenContext";
import HamburgerThreeLines from "./icons/HamburgerThreeLines";
import DropDownMenu from "./UserDropDownMenu";
import SideModalMenu from "./SideModalMenu";
import Chevron from "./icons/Chevron";

const RideNavbar = () => {
  const [isUserDropdownMenuActive, setIsUserDropdownMenuActive] =
    useState(false);
  const [isSideModalMenuActive, setIsSideModalMenuActive] = useState(false);

  const { isSearchMenuActive, setIsSearchMenuActive } =
    useContext(SearchMenuContext);

  const { isSmallScreen } = useContext(SmallScreenContext);

  const { isRideResultsActive, setIsRideResultsActive } =
    useContext(RideResultsContext);

  const { setIsRideError } = useContext(RideErrorScreenContext);

  const dispatch = useDispatch();
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);

  useEffect(() => {
    if (isSideModalMenuActive === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isSideModalMenuActive]);

  useLayoutEffect(() => {
    const handleCloseMenu = () => {
      if (isSideModalMenuActive && window.innerWidth >= 1024) {
        setIsSideModalMenuActive(false);
      }
    };
    window.addEventListener("resize", handleCloseMenu);
    return () => {
      window.removeEventListener("resize", handleCloseMenu);
    };
  }, [window.innerWidth]);

  return (
    <header
      className={`${
        isSearchMenuActive ? "static" : "absolute"
      } left-0 right-0 top-0 z-10 border-whiteHover bg-transparent py-3 font-medium text-black lg:static lg:border-b-4 lg:bg-white`}
    >
      <div className="mx-auto flex max-w-[110rem] items-center justify-between px-4">
        <nav className="flex items-center text-sm">
          <ul>
            <li>
              <Link to="/">
                {((!isSearchMenuActive &&
                  !isRideResultsActive &&
                  isSmallScreen) ||
                  !isSmallScreen) && (
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
            {isRideResultsActive && isSmallScreen && (
              <li
                onClick={() => {
                  setIsRideResultsActive(false);
                  setIsRideError(false);
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
          <ul className="relative flex items-center gap-4 text-sm leading-4">
            <li className="hidden lg:flex">
              <RideNavbarButton labelText="My trips" icon={<Ticket />} />
            </li>
            <li
              className="hidden cursor-pointer lg:flex"
              onMouseOver={() => setIsUserDropdownMenuActive(true)}
              onMouseLeave={() => setIsUserDropdownMenuActive(false)}
            >
              <UserButton />
              <div className="ml-1 flex w-5 items-center">
                <Chevron />
              </div>
              {isUserDropdownMenuActive && (
                <div className="absolute right-0 top-5 z-10 mt-3 pt-8">
                  <DropDownMenu />
                </div>
              )}
            </li>
            <li
              className="cursor-pointer rounded-full bg-white p-[0.875rem] lg:hidden"
              onClick={() => setIsSideModalMenuActive(true)}
            >
              <HamburgerThreeLines />
            </li>
          </ul>
        </nav>
      </div>
      <div
        className={`fixed bottom-0 left-0 right-0 top-0 z-40 bg-black transition-opacity duration-500 ${
          isSideModalMenuActive ? "opacity-50" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsSideModalMenuActive(false)}
      ></div>

      <div
        className={`fixed bottom-0 right-0 top-0 z-50 w-full bg-white transition-transform duration-500 xs:max-w-[31.25rem] ${
          isSideModalMenuActive ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <SideModalMenu handleClose={() => setIsSideModalMenuActive(false)} />
      </div>
    </header>
  );
};

export default RideNavbar;
