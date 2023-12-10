import HomeHeroElement from "./HomeHeroElement";
import heroPicture1 from "../images/hero1.jpg";
import { useState } from "react";

const HomeHero = () => {
  const [background, setBackground] = useState({
    picture: heroPicture1,
    className: "bg-hero1",
  });

  const getHeroPicture = async (id: number) => {
    try {
      const picture = await import(`../images/hero${id}.jpg`);
      return picture;
    } catch (error) {
      console.error("Error loading image:", error);
    }
  };

  const handleChangeBackgroundImage = async (id: number) => {
    const picture = await getHeroPicture(id);
    setBackground({
      picture: picture.default,
      className: `bg-hero${id}`,
    });
  };

  return (
    <section>
      <div
        style={{
          backgroundImage: `url(${background.picture})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="h-full w-full bg-lightGrey2"
      >
        <div className="xl:container">
          <div className="h-full xl:p-16">
            <div className="w-full xl:max-w-[50%]">
              <HomeHeroElement
                handleChangeBackgroundImage={handleChangeBackgroundImage}
              />
            </div>
            <div className="xl:hidden">
              <img src={background.picture} alt="taxi driver in the car" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
