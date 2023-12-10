import HomeHeroElementHeader from "./HomeHeroElementHeader";
import HomeHeroElementMain from "./HomeHeroElementMain";
import { heroList } from "../data/data";
import { useState } from "react";

type Props = {
  handleChangeBackgroundImage: (id:number) => void
}

const HomeHeroElement = ({handleChangeBackgroundImage}:Props) => {
  const [activeHeaderId, setActiveHeaderId] = useState(1);

  const mainContent = heroList.find((element) => element.id === activeHeaderId);

  const handleClick = (id: number) => {
    setActiveHeaderId(id);
    handleChangeBackgroundImage(id);
  };
  return (
    <div className="flex flex-col bg-white text-black">
      <div className="flex border-b border-b-[rgb(238,238,238)] xl:justify-evenly">
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
