import RideMain from "../components/RideMain";
import RideNavbar from "../components/RideNavbar";
import { CarSelectMenuContextProvider } from "../context/CarSelectMenuContext";
import { SearchMenuContextProvider } from "../context/SearchMenuContext";

const Ride = () => {
  return (
    <SearchMenuContextProvider>
      <CarSelectMenuContextProvider>
        <RideNavbar />
        <RideMain />
      </CarSelectMenuContextProvider>
    </SearchMenuContextProvider>
  );
};

export default Ride;
