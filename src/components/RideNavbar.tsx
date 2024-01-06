import { Link } from "react-router-dom";
import RideNavbarButton from "./buttons/RideNavbarButton";
import Car from "./icons/Car";
import Package from "./icons/Package";
import Restaurant from "./icons/Restaurant";
import Ticket from "./icons/Ticket";
import Hamburger from "./icons/Hamburger";

const RideNavbar = () => {
  return (
    <header className="border-whiteHover bg-white py-3 font-medium text-black md:border-b-4">
      <div className="mx-auto flex max-w-[88rem] items-center justify-between px-6 xl:px-16">
        <nav className="flex items-center text-sm">
          <ul>
            <Link to="/ride">
              <li className="mr-20 font-UberMove text-xl md:text-3xl">Uber</li>
            </Link>
          </ul>
          <ul className="mx-6 hidden gap-8 leading-4 md:flex">
            <li>
              <RideNavbarButton labelText="Ride" icon={<Car />} />
            </li>
            <li>
              <RideNavbarButton labelText="Uber package" icon={<Package />} />
            </li>
            <li>
              <RideNavbarButton labelText="Uber Eats" icon={<Restaurant />} />
            </li>
          </ul>
        </nav>
        <nav>
          <ul className="flex items-center gap-1 text-sm leading-4">
            <li className="hidden md:flex">
              <RideNavbarButton labelText="My trips" icon={<Ticket />} />
            </li>
            <li className="w-4 md:hidden">
              <RideNavbarButton icon={<Hamburger />} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default RideNavbar;
