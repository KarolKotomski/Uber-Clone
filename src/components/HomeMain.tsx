import Banner from "./Banner";
import Download from "./Download";
import { bannerContentList } from "../utilities/PageContentData";

const HomeMain = () => {
  return (
    <main>
      <section className="bg-black text-white">
        <Banner
          content={bannerContentList[0]}
          buttonStyle="white"
          buttonText="See prices"
          buttonLinkTo="ride"
          searchPanel={true}
        />
      </section>
      <section>
        <Banner
          content={bannerContentList[1]}
          buttonStyle="black"
          buttonText="Get started"
          buttonLinkTo="ride"
          switchPicture={true}
          secondaryButton={true}
          secondaryButtonText="Already have an account? Sign in"
        />
      </section>
      <section>
        <Banner
          content={bannerContentList[2]}
          buttonStyle="black"
          buttonText="Get started"
          buttonLinkTo="ride"
          secondaryButton={true}
          secondaryButtonText="Check out our solutions"
        />
      </section>
      <section className="lg:bg-lightGrey">
        <Download />
      </section>
    </main>
  );
};

export default HomeMain;
