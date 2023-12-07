import HomeFocusedUnit from "./HomeFocusedUnit";

const HomeFocused = () => {
  return (
    <section>
      <div className="container p-16">
        <h2 className="font-UberMove pb-9 text-[2.25rem] font-bold">
          Focused on safety, wherever you go
        </h2>
        <div className="grid grid-cols-2 gap-9">
          <HomeFocusedUnit />
          <HomeFocusedUnit />
        </div>
      </div>
    </section>
  );
};

export default HomeFocused;
