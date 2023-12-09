import HomeSignUpUnit from "./HomeSignUpUnit";

const HomeSignUp = () => {
  return (
    <section>
      <div className="container p-16">
        <div className="grid grid-cols-2 gap-9">
          <HomeSignUpUnit purpose="drive"/>
          <HomeSignUpUnit purpose="ride"/>
        </div>
      </div>
    </section>
  );
};

export default HomeSignUp;
