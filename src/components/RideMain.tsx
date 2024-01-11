import SearchSection from "./SearchSection";
import GoogleMapSection from "./GoogleMapSection";

const RideMain = () => {
  return (
    <main className="relative h-screen gap-5 lg:container lg:flex lg:h-full lg:flex-row-reverse lg:py-10">
      <map className="absolute bottom-[12rem] left-0 right-0 top-0 lg:static lg:h-[80vh] lg:w-full lg:pr-5">
        <GoogleMapSection />
      </map>
      <div className="fixed bottom-0 left-0 right-0 bg-lightGrey2 lg:static lg:w-1/3 lg:min-w-[22rem] lg:bg-white lg:px-5">
        <SearchSection />
      </div>
    </main>
  );
};

export default RideMain;
