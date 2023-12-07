import HomeAboutUnit from "./HomeAboutUnit";

const HomeAbout = () => {
  return (
    <section>
      <div className="container grid grid-cols-3 p-16 text-greyHover gap-9">
        <HomeAboutUnit />
        <HomeAboutUnit />
        <HomeAboutUnit />
      </div>
    </section>
  );
};

export default HomeAbout;
