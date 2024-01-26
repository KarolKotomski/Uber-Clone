import Footer from "../components/Footer";
import HomeMain from "../components/HomeMain";
import HomeNavbar from "../components/HomeNavbar";
import { HomeNavModalContextProvider } from "../context/HomeNavModalContext";

const Home = () => {
  return (
    <HomeNavModalContextProvider>
      <HomeNavbar />
      <HomeMain />
      <Footer />
    </HomeNavModalContextProvider>
  );
};

export default Home;
