import RideMain from "../components/RideMain";
import RideNavbar from "../components/RideNavbar";
import { SmallScreenContextProvider } from "../context/SmallScreenContext";

const Ride = () => {
  return (
    <SmallScreenContextProvider>
      <RideNavbar />
      <RideMain />
    </SmallScreenContextProvider>
  );
};

export default Ride;
