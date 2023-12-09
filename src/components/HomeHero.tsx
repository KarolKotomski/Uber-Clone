import HomeHeroElement from "./HomeHeroElement";

const HomeHero = () => {
  return (
    <section>
      <div className="bg-lightGrey2 h-full w-full bg-hero bg-cover bg-center bg-no-repeat">
        <div className="container">
          <div className="left-0 right-0 top-0 h-full p-16">
            <div className="max-w-[50%]">
              <HomeHeroElement />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
