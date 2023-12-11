import { Link } from "react-router-dom";
import caretIcon from "../icons/caret.png";
import globeIcon from "../icons/globe.png";
import dotsIcon from "../icons/dots.png";
import hamburgerIcon from "../icons/hamburger.png";
import HomeNavbarButton from "./HomeNavbarButton";

const HomeNavbar = () => {
  return (
    <nav className="bg-black py-3 font-medium text-white">
      <div className="mx-auto flex max-w-[88rem] items-center justify-between px-6 xl:px-16">
        <div className="flex items-center text-sm">
          <ul>
            <Link to="/">
              <li className="font-UberMove text-2xl">Uber</li>
            </Link>
          </ul>
          <ul className="mx-6 hidden gap-1 leading-4 md:flex">
            <li>
              <HomeNavbarButton
                labelText="Company"
                altText="caret"
                icon={caretIcon}
                iconCustomStyle="w-[1.125rem]"
              />
            </li>
            <li>
              <HomeNavbarButton labelText="Safety" />
            </li>
            <li>
              <HomeNavbarButton labelText="Help" />
            </li>
          </ul>
        </div>
        <ul className="flex gap-1 text-sm leading-4">
          <li className="hidden md:block">
            <HomeNavbarButton
              labelText="EN"
              altText="globe"
              icon={globeIcon}
              iconOnTheLeft={true}
            />
          </li>
          <li className="hidden md:block">
            <HomeNavbarButton
              labelText="Products"
              altText="dots looking like a mesh"
              icon={dotsIcon}
              iconOnTheLeft={true}
            />
          </li>
          <li>
            <HomeNavbarButton
              labelText="Log in"
              buttonCustomStyle="ml-4 text-black bg-white hover:bg-whiteHover active:bg-greyActive"
            />
          </li>
          <li className="md:hidden">
            <HomeNavbarButton altText="hamburger menu" icon={hamburgerIcon} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HomeNavbar;
