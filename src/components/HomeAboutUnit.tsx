import person from "../icons/person.svg";

const HomeAboutUnit = () => {
  return (
    <div className="flex flex-col gap-5">
      <img
        src={person}
        alt="taxi driver man drives a car with a woman as a passenger"
        className="h-6 w-6"
      />
      <h3 className="text-lg font-medium">About us</h3>
      <p>
        Find out how we started, what drives us, and how we're reimagining how
        the world moves.
      </p>
      <div className="mt-3 flex gap-5">
        <div>Learn more about Uber</div>
      </div>
    </div>
  );
};

export default HomeAboutUnit;
