import RideMain from "../components/RideMain";
import RideNavbar from "../components/RideNavbar";
import { CarSelectMenuContextProvider } from "../context/CarSelectMenuContext";
import { SmallScreenContextProvider } from "../context/SmallScreenContext";
import { SearchMenuContextProvider } from "../context/SearchMenuContext";
import { SearchButtonContextProvider } from "../context/SearchButtonContext";

const Ride = () => {
  return (
    <SearchMenuContextProvider>
      <CarSelectMenuContextProvider>
        <SmallScreenContextProvider>
          <SearchButtonContextProvider>
            <RideNavbar />
            <RideMain />
          </SearchButtonContextProvider>
        </SmallScreenContextProvider>
      </CarSelectMenuContextProvider>
    </SearchMenuContextProvider>
  );
};

export default Ride;
