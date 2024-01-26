import Chevron from "./icons/Chevron";

const HomeNavModal = () => {
  return (
    <div className="bg-white p-6 text-black">
      <div className="flex flex-col gap-8  text-3xl font-bold">
        <div className="flex items-center justify-between">
          <h2 className="font-UberMove">Company</h2>
          <span>
            <Chevron />
          </span>
        </div>
        <h2 className="font-UberMove">Safety</h2>
        <h2 className="font-UberMove">Help</h2>
          </div>
          
    </div>
  );
};

export default HomeNavModal;
