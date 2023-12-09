import HomeHeroElementHeader from "./HomeHeroElementHeader";
import HomeHeroElementMain from "./HomeHeroElementMain";
import { heroElementHeaderList, heroElementMainList } from "../data/data";

const HomeHeroElement = () => {
  return (
    <div className="flex flex-col bg-white text-black">
      <div className="flex justify-evenly border-b border-b-[rgb(238,238,238)]">
        {heroElementHeaderList.map((element, index) => {
          return (
            <HomeHeroElementHeader key={index} icon={element.icon} text={element.text} />
          );
        })}
      </div>
      <HomeHeroElementMain object={heroElementMainList[0]} />
    </div>
  );
};

export default HomeHeroElement;
