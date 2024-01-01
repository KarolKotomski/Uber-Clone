import Banner from "./Banner";
import Download from "./Download";
import SignUp from "./SignUp";
import { bannerContentList } from "../data/data";

const HomeMain = () => {
  return (
    <main>
      <section className="bg-black text-white">
        <Banner
          content={bannerContentList[0]}
          buttonText="See prices"
          invertedColors={true}
        />
      </section>
      <section>
        <Banner
          content={bannerContentList[1]}
          buttonText="Get started"
          switchPicture={true}
          secondaryButton={true}
          secondaryButtonText="Already have an account? Sign in"
        />
      </section>
      <section>
        <Banner
          content={bannerContentList[2]}
          buttonText="Get started"
          secondaryButton={true}
          secondaryButtonText="Check out our solutions"
        />
      </section>
      <Download />
      <SignUp />
    </main>
  );
};

export default HomeMain;
