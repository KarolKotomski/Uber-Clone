import HomeAboutUnit from "./HomeAboutUnit";
import { aboutList } from "../data/data";

const HomeAbout = () => {
  return (
    <section>
      <div className="container grid grid-cols-3 gap-9 p-16 text-greyHover">
        {aboutList.map((element, index) => {
          return (
            <HomeAboutUnit
              key={index}
              icon={element.icon}
              header={element.header}
              paragraph={element.paragraph}
              link={element.link}
            />
          );
        })}
      </div>
    </section>
  );
};

export default HomeAbout;
