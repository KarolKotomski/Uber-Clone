import HomeHeroElement from "./HomeHeroElement";
import heroPicture from "../images/hero.webp";

const HomeHero = () => {
  return (
    <section>
      <div className="h-full w-full bg-lightGrey2 bg-hero bg-cover bg-center bg-no-repeat">
        <div className="xl:container">
          <div className="h-full xl:p-16">
            <div className="w-full xl:max-w-[50%]">
              <HomeHeroElement />
            </div>
            <div className="xl:hidden">
              <img src={heroPicture} alt="taxi driver in the car" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
