import HomeAboutUnit from "./HomeAboutUnit";
import { aboutList } from "../data/data";

const HomeAbout = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 gap-9 p-6 px-6 py-10 text-greyHover sm:grid-cols-2 sm:px-8 sm:py-14 lg:grid-cols-3 xl:p-16">
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
