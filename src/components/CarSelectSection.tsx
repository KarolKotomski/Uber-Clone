import CarUnit from "./CarUnit";

const CarSelectSection = () => {
  return (
    <div className="flex flex-col gap-2 rounded-t-xl border-whiteHover bg-white">
      <h1 className="border-b-2 pb-4 pt-5 text-center font-medium">
        Select a Ride
      </h1>
      <div className="grid grid-cols-1 gap-1 p-4">
        <CarUnit />
        <CarUnit />
        <CarUnit />
        <CarUnit />
        <CarUnit />
      </div>
    </div>
  );
};

export default CarSelectSection;
