import RideMain from "../components/RideMain";
import RideNavbar from "../components/RideNavbar";
import { SearchMenuContextProvider } from "../context/SearchMenuContext";

const Ride = () => {
  return (
    <SearchMenuContextProvider>
      <RideNavbar />
      <RideMain />
    </SearchMenuContextProvider>
  );
};

export default Ride;
