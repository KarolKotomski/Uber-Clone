const HomeBanner = () => {
  return (
    <section>
      <div className="bg-banner bg-[#EEEEEE] bg-cover bg-center">
        <div className="container p-16">
          <div className="flex w-4/5 flex-col gap-5">
            <h2 className="font-UberMove text-[2.25rem] font-bold">
              The Uber you know, reimagined for business
            </h2>
            <p>
              A platform for managing global rides and meals, and local
              deliveries, for companies of any size.
            </p>
            <button className="inline-block w-fit rounded-lg bg-black px-6 py-3 font-medium text-white mt-3">
              Get started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
