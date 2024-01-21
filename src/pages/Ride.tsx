import RideMain from "../components/RideMain";
import RideNavbar from "../components/RideNavbar";
import { CarSelectMenuContextProvider } from "../context/CarSelectMenuContext";
import { SmallScreenContextProvider } from "../context/SmallScreenContext";
import { SearchMenuContextProvider } from "../context/SearchMenuContext";
import { SearchButtonContextProvider } from "../context/SearchButtonContext";
import { RideErrorScreenContextProvider } from "../context/RideErrorScreenContext";

const Ride = () => {
  return (
    <SearchMenuContextProvider>
      <CarSelectMenuContextProvider>
        <SmallScreenContextProvider>
          <SearchButtonContextProvider>
            <RideErrorScreenContextProvider>
              <RideNavbar />
              <RideMain />
            </RideErrorScreenContextProvider>
          </SearchButtonContextProvider>
        </SmallScreenContextProvider>
      </CarSelectMenuContextProvider>
    </SearchMenuContextProvider>
  );
};

export default Ride;
