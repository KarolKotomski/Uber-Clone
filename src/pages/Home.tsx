import Footer from "../components/Footer";
import HomeMain from "../components/HomeMain";
import HomeNavModal from "../components/HomeNavModal";
import HomeNavbar from "../components/HomeNavbar";
import {
  HomeNavModalContextProvider,
} from "../context/HomeNavModalContext";

const Home = () => {

  return (
    <HomeNavModalContextProvider>
      <HomeNavbar />
      <HomeNavModal />
      <HomeMain />
      <Footer />
    </HomeNavModalContextProvider>
  );
};

export default Home;
