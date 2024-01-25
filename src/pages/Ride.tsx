import RideMain from "../components/RideMain";
import RideNavbar from "../components/RideNavbar";
import { SmallScreenContextProvider } from "../context/SmallScreenContext";
import { SearchMenuContextProvider } from "../context/SearchMenuContext";
import { SearchButtonContextProvider } from "../context/SearchButtonContext";
import { RideErrorScreenContextProvider } from "../context/RideErrorScreenContext";
import { RideResultsContextProvider } from "../context/RideResultsContext";
import { MapContextProvider } from "../context/MapContext";
import { ActiveCarContextProvider } from "../context/ActiveCarContext";

const Ride = () => {
  return (
    <SearchMenuContextProvider>
      <RideResultsContextProvider>
        <SmallScreenContextProvider>
          <SearchButtonContextProvider>
            <RideErrorScreenContextProvider>
              <MapContextProvider>
                <ActiveCarContextProvider>
                  <RideNavbar />
                  <RideMain />
                </ActiveCarContextProvider>
              </MapContextProvider>
            </RideErrorScreenContextProvider>
          </SearchButtonContextProvider>
        </SmallScreenContextProvider>
      </RideResultsContextProvider>
    </SearchMenuContextProvider>
  );
};

export default Ride;
