import RideMain from "../components/RideMain";
import RideNavbar from "../components/RideNavbar";
import { CarSelectMenuContextProvider } from "../context/CarSelectMenuContext";
import { SmallScreenContextProvider } from "../context/SmallScreenContext";
import { SearchMenuContextProvider } from "../context/SearchMenuContext";

const Ride = () => {
  return (
    <SearchMenuContextProvider>
      <CarSelectMenuContextProvider>
        <SmallScreenContextProvider>
          <RideNavbar />
          <RideMain />
        </SmallScreenContextProvider>
      </CarSelectMenuContextProvider>
    </SearchMenuContextProvider>
  );
};

export default Ride;
