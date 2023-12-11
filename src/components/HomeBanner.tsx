const HomeBanner = () => {
  return (
    <section>
      <div className="bg-lightGrey2 bg-banner bg-cover bg-center">
        <div className="container px-6 py-10 sm:px-8 sm:py-14 xl:p-16">
          <div className="flex flex-col gap-5">
            <h2 className="font-UberMove text-[1.75rem] font-bold sm:text-[2rem] lg:text-[2.25rem]">
              The Uber you know, reimagined for business
            </h2>
            <p>
              A platform for managing global rides and meals, and local
              deliveries, for companies of any size.
            </p>
            <button className="mt-3 inline-block w-fit rounded-lg bg-black px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-greyHover">
              Get started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
