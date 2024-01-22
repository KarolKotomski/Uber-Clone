import RideMain from "../components/RideMain";
import RideNavbar from "../components/RideNavbar";
import { SmallScreenContextProvider } from "../context/SmallScreenContext";
import { SearchMenuContextProvider } from "../context/SearchMenuContext";
import { SearchButtonContextProvider } from "../context/SearchButtonContext";
import { RideErrorScreenContextProvider } from "../context/RideErrorScreenContext";
import { RideResultsContextProvider } from "../context/RideResultsContext";
import { MapContextProvider } from "../context/MapContext";

const Ride = () => {
  return (
    <SearchMenuContextProvider>
      <RideResultsContextProvider>
        <SmallScreenContextProvider>
          <SearchButtonContextProvider>
            <RideErrorScreenContextProvider>
              <MapContextProvider>
                <RideNavbar />
                <RideMain />
              </MapContextProvider>
            </RideErrorScreenContextProvider>
          </SearchButtonContextProvider>
        </SmallScreenContextProvider>
      </RideResultsContextProvider>
    </SearchMenuContextProvider>
  );
};

export default Ride;
