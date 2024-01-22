import RideMain from "../components/RideMain";
import RideNavbar from "../components/RideNavbar";
import { SmallScreenContextProvider } from "../context/SmallScreenContext";
import { SearchMenuContextProvider } from "../context/SearchMenuContext";
import { SearchButtonContextProvider } from "../context/SearchButtonContext";
import { RideErrorScreenContextProvider } from "../context/RideErrorScreenContext";
import { RideResultsContextProvider } from "../context/RideResultsContext";

const Ride = () => {
  return (
    <SearchMenuContextProvider>
      <RideResultsContextProvider>
        <SmallScreenContextProvider>
          <SearchButtonContextProvider>
            <RideErrorScreenContextProvider>
              <RideNavbar />
              <RideMain />
            </RideErrorScreenContextProvider>
          </SearchButtonContextProvider>
        </SmallScreenContextProvider>
      </RideResultsContextProvider>
    </SearchMenuContextProvider>
  );
};

export default Ride;
