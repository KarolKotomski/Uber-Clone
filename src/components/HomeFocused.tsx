import HomeFocusedUnit from "./HomeFocusedUnit";
import { focusedList } from "../data/data";

const HomeFocused = () => {
  return (
    <section>
      <div className="container p-16 text-greyHover">
        <h2 className="pb-9 font-UberMove text-[2.25rem] font-bold">
          Focused on safety, wherever you go
        </h2>
        <div className="grid grid-cols-2 gap-9">
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
