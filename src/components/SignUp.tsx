import SignUpUnit from "./SignUpUnit";

const SignUp = () => {
  return (
    <section>
      <div className="container px-6 py-10 sm:px-8 sm:py-14 xl:p-16">
        <div className="grid grid-cols-1 gap-9 lg:grid-cols-2">
          <SignUpUnit purpose="drive" />
          <SignUpUnit purpose="ride" />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
