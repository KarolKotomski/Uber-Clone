import WarningSign from "./icons/WarningSign";

const RideErrorScreen = () => {
  return (
    <div className="flex flex-col p-5">
      <div className="mx-auto w-16">
        <WarningSign />
      </div>
      <h5 className="font-medium">An error occurred</h5>
      <p>
        We cannot fulfill your request. Try changing your pickup location or
        destination.
      </p>
    </div>
  );
};

export default RideErrorScreen;
