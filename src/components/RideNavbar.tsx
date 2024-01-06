import { Link } from "react-router-dom";
import hamburgerIcon from "../icons/hamburger.png";
import HomeNavbarButton from "./buttons/HomeNavbarButton";
import RideNavbarButton from "./buttons/RideNavbarButton";
import CarIcon from "./icons/CarIcon";
import PackageIcon from "./icons/PackageIcon";
import RestaurantIcon from "./icons/RestaurantIcon";
import TicketIcon from "./icons/TicketIcon";
import Hamburger from "./icons/Hamburger";

const RideNavbar = () => {
  return (
    <header className="bg-white py-3 font-medium text-black">
      <div className="mx-auto flex max-w-[88rem] items-center justify-between px-6 xl:px-16">
        <nav className="flex items-center text-sm">
          <ul>
            <Link to="/ride">
              <li className="font-UberMove text-xl md:text-2xl">Uber</li>
            </Link>
          </ul>
          <ul className="mx-6 hidden gap-8 leading-4 md:flex">
            <li>
              <RideNavbarButton labelText="Ride" icon={<CarIcon />} />
            </li>
            <li>
              <RideNavbarButton
                labelText="Uber package"
                icon={<PackageIcon />}
              />
            </li>
            <li>
              <RideNavbarButton
                labelText="Uber Eats"
                icon={<RestaurantIcon />}
              />
            </li>
          </ul>
        </nav>
        <nav>
          <ul className="flex items-center gap-1 text-sm leading-4">
            <li className="hidden md:flex">
              <RideNavbarButton labelText="My trips" icon={<TicketIcon />} />
            </li>
            <li className="md:hidden">
              <RideNavbarButton icon={<Hamburger />} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default RideNavbar;
