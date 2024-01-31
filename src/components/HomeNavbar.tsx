import { Link } from "react-router-dom";
import HomeNavbarButton from "./buttons/HomeNavbarButton";
import { useContext, useEffect, useRef, useState } from "react";
import { HomeNavModalContext } from "../context/HomeNavModalContext";
import Globe from "./icons/Globe";
import Mesh from "./icons/Mesh";
import HamburgerTwoLines from "./icons/HamburgerTwoLines";
import HomeNavModal from "./HomeNavModal";
import CloseButton from "./buttons/CloseButton";
import Chevron from "./icons/Chevron";
import CompanyDropDownMenu from "./CompanyDropDownMenu";

const HomeNavbar = () => {
  const [isCompanyDropDownMenuActive, setIsCompanyDropdownMenuActive] =
    useState(false);

  const { isHomeNavModalActive, setIsHomeNavModalActive } =
    useContext(HomeNavModalContext);

  const companyMenuRef = useRef<HTMLLIElement>(null);

  const handleClickOutsideMenu = (e: MouseEvent) => {
    if (
      companyMenuRef.current &&
      !companyMenuRef.current.contains(e.target as Node)
    ) {
      setIsCompanyDropdownMenuActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutsideMenu);
    return () => {
      document.removeEventListener("click", handleClickOutsideMenu);
    };
  });

  useEffect(() => {
    if (isHomeNavModalActive === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isHomeNavModalActive]);

  return (
    <header className="bg-black py-3 font-medium text-white">
      <div className="mx-auto flex max-w-[88rem] items-center justify-between px-6 xl:px-16">
        <nav className="flex items-center text-sm">
          <ul>
            <li>
              <Link to="/">
                <span className="font-UberMove text-xl md:text-2xl">Uber</span>
              </Link>
            </li>
          </ul>
          <ul className="mx-6 hidden gap-1 leading-4 md:flex">
            <li className="relative" ref={companyMenuRef}>
              <HomeNavbarButton
                labelText="Company"
                iconCustomStyle="w-[1.125rem]"
                buttonStyle="white/black"
                icon={<Chevron />}
                handleClick={() =>
                  setIsCompanyDropdownMenuActive(!isCompanyDropDownMenuActive)
                }
                applyFocus={true}
              />

              {isCompanyDropDownMenuActive && (
                <div className="absolute left-3 z-10 mt-2">
                  <CompanyDropDownMenu />
                </div>
              )}
            </li>
            <li>
              <HomeNavbarButton labelText="Safety" buttonStyle="white/black" />
            </li>
            <li>
              <HomeNavbarButton labelText="Help" buttonStyle="white/black" />
            </li>
          </ul>
        </nav>
        <nav>
          <ul className="flex items-center gap-2 text-sm leading-4">
            <li className="hidden md:block">
              <HomeNavbarButton
                buttonStyle="white/black"
                labelText="EN"
                icon={<Globe />}
                iconOnTheLeft={true}
              />
            </li>
            <li className="hidden md:block">
              <HomeNavbarButton
                buttonStyle="white/black"
                labelText="Products"
                icon={<Mesh />}
                iconCustomStyle="fill-white"
                iconOnTheLeft={true}
              />
            </li>
            <li>
              <HomeNavbarButton labelText="Log in" buttonStyle="white/black" />
            </li>
            <li>
              <HomeNavbarButton labelText="Sign up" buttonStyle="black/white" />
            </li>
            <li className="md:hidden">
              {!isHomeNavModalActive ? (
                <div onClick={() => setIsHomeNavModalActive(true)}>
                  <HomeNavbarButton
                    buttonStyle="white/black"
                    icon={<HamburgerTwoLines />}
                  />
                </div>
              ) : (
                <div onClick={() => setIsHomeNavModalActive(false)}>
                  <CloseButton />
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
      <HomeNavModal />
    </header>
  );
};

export default HomeNavbar;
