import HomeHeroElementHeader from "./HomeHeroElementHeader";
import HomeHeroElementMain from "./HomeHeroElementMain";
import { heroList } from "../data/data";
import { useState, useEffect } from "react";

type Props = {
  handleChangeBackgroundImage: (id: number) => void;
};

type Translation = {
  [key: number]: string;
};

const HomeHeroElement = ({ handleChangeBackgroundImage }: Props) => {
  const [activeHeaderId, setActiveHeaderId] = useState(1);
  const [translationDistance, setTranslationDistance] = useState("0.975px");

  const mainContent = heroList.find((element) => element.id === activeHeaderId);

  const handleClick = (id: number) => {
    setActiveHeaderId(id);
    handleChangeBackgroundImage(id);
    handleTranslationDistance(id);
  };

  const bigTransDistanceList: Translation = {
    1: "0.975px",
    2: "3.1px",
    3: "5.225px",
  };
  const smallTransDistanceList: Translation = {
    1: "0.15px",
    2: "1.45px",
    3: "2.75px",
  };

  const handleTranslationDistance = (id: number) => {
    const containerWidth = window.innerWidth;
    if (containerWidth >= 1280) {
      setTranslationDistance(bigTransDistanceList[id]);
    } else {
      setTranslationDistance(smallTransDistanceList[id]);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      handleTranslationDistance(activeHeaderId);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeHeaderId]);

  return (
    <div className="flex flex-col bg-white text-black">
      <div className="relative flex border-b border-b-[rgb(238,238,238)] xl:justify-evenly">
        {heroList.map((element) => {
          return (
            <HomeHeroElementHeader
              key={element.id}
              icon={element.icon}
              label={element.label}
              id={element.id}
              handleClick={handleClick}
            />
          );
        })}

        <div
          style={{
            transform: `scaleX(80) translateX(${translationDistance})`,
          }}
          className="absolute bottom-0 left-0 h-1 w-[0.0625rem] origin-left bg-black transition-transform duration-[600ms] ease-[cubic-bezier(0.19,1,0.22,1)]"
        ></div>
      </div>

      <HomeHeroElementMain
        header={mainContent?.header}
        paragraph={mainContent?.paragraph}
        buttonText={mainContent?.buttonText}
        additionalText={mainContent?.additionalText}
        isButton={mainContent?.isButton}
      />
    </div>
  );
};

export default HomeHeroElement;
