const HomeBanner = () => {
  return (
    <section>
      <div className="bg-lightGrey2 bg-banner bg-cover bg-center">
        <div className="container p-16">
          <div className="flex flex-col gap-5">
            <h2 className="font-UberMove text-[2.25rem] font-bold">
              The Uber you know, reimagined for business
            </h2>
            <p>
              A platform for managing global rides and meals, and local
              deliveries, for companies of any size.
            </p>
            <button className="mt-3 inline-block w-fit rounded-lg bg-black px-6 py-3 font-medium text-white">
              Get started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
