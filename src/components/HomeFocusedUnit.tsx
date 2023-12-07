import focused1 from "../images/focused1.webp";

const HomeFocusedUnit = () => {
  return (
    <div className="flex flex-col gap-5">
      <img
        src={focused1}
        alt="taxi driver man drives a car with a woman as a passenger"
        className="w-full"
      />
      <h3 className="text-lg font-medium">Our commitment to your safety</h3>
      <p>
        With every safety feature and every standard in our Community
        Guidelines, we're committed to helping to create a safe environment for
        our users.
      </p>
      <div className="flex gap-5 mt-3">
        <div>Read about our Community Guidelines</div>
        <div>See all safety features</div>
      </div>
    </div>
  );
};

export default HomeFocusedUnit;
