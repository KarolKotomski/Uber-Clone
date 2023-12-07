import HomeAbout from "./HomeAbout";
import HomeBanner from "./HomeBanner";
import HomeDownload from "./HomeDownload";
import HomeFocused from "./HomeFocused";
import HomeHero from "./HomeHero";
import HomeSignUp from "./HomeSignUp";

const HomeMain = () => {
  return (
    <main>
      <HomeHero />
      <HomeBanner />
      <HomeFocused />
      <HomeAbout />
      <HomeDownload />
      <HomeSignUp />
    </main>
  );
};

export default HomeMain;
