import SearchSection from "./SearchSection";
import GoogleMapSection from "./GoogleMapSection";

const RideMain = () => {
  return (
    <main className="relative gap-5 lg:container lg:flex lg:flex-row-reverse lg:py-10 h-screen lg:h-full">
      <map className="absolute bottom-[11.5rem] left-0 right-0 top-0 lg:static lg:h-[80vh] lg:w-full lg:pr-5">
        <GoogleMapSection />
      </map>
      <div className="fixed bottom-0 left-0 right-0 bg-lightGrey2 lg:static lg:w-1/3 lg:min-w-[22rem] lg:bg-white lg:px-5">
        <SearchSection />
      </div>
    </main>
  );
};

export default RideMain;
