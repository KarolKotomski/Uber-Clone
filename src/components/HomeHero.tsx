import HomeHeroUnit from "./HomeHeroUnit";

const HomeHero = () => {
  return (
    <section>
      <div className="bg-hero h-full w-full bg-[#EEEEEE] bg-cover bg-center bg-no-repeat">
        <div className="container">
          <div className="left-0 right-0 top-0 h-full p-16">
            <div className="max-w-[50%]">
              <HomeHeroUnit />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
