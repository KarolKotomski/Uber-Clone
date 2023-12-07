import heroPicture from "../images/hero.webp";
import HomeHeroUnit from "./HomeHeroUnit";

const HomeHero = () => {
  return (
    <section className="relative">
      <div>
        <img src={heroPicture} alt="taxi driver driving a car" />
      </div>

      <div className="container absolute left-0 right-0 top-0 h-full p-16">
        <div className="max-w-[50%]">
          <HomeHeroUnit />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
