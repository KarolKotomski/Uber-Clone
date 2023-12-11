import HomeFocusedUnit from "./HomeFocusedUnit";
import { focusedList } from "../data/data";

const HomeFocused = () => {
  return (
    <section>
      <div className="container px-6 py-10 text-greyHover sm:px-8 sm:py-14 xl:p-16">
        <h2 className="pb-9 font-UberMove text-[1.75rem] font-bold sm:text-[2rem] lg:text-[2.25rem]">
          Focused on safety, wherever you go
        </h2>
        <div className="grid grid-cols-1 gap-9 xs:grid-cols-2">
          {focusedList.map((element, index) => {
            return (
              <HomeFocusedUnit
                key={index}
                picture={element.picture}
                header={element.header}
                paragraph={element.paragraph}
                additionals={element.additionals}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeFocused;
