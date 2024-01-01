import Banner from "./Banner";
import Download from "./Download";
import SignUp from "./SignUp";
import { bannerContentList } from "../data/data";

const HomeMain = () => {
  return (
    <main>
      <section className="bg-black text-white">
        <Banner content={bannerContentList[0]} />
      </section>
      <section></section>
      <section></section>
      <Download />
      <SignUp />
    </main>
  );
};

export default HomeMain;
