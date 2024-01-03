import { Link } from "react-router-dom";
import notFoundPicture from "../images/notFound.webp";
import SecondaryButton from "../components/buttons/SecondaryButton";

const NoMatch = () => {
  return (
    <>
      <header className="bg-black py-3 font-medium text-white">
        <div className="mx-auto flex max-w-[88rem] items-center justify-between px-6 xl:px-16">
          <nav className="flex items-center text-sm">
            <Link to="/">
              <h1 className="font-UberMove text-2xl">Uber</h1>
            </Link>
          </nav>
        </div>
      </header>
      <main className="container flex flex-col gap-4 px-6 py-10 lg:flex-row-reverse">
        <div className="flex-1">
          <img
            src={notFoundPicture}
            alt="red traffic light"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col gap-5">
          <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl font-UberMove">
            Sorry, we couldn't find that page
          </h2>
          <p>
            We have shifted a few things around, and your page must have gotten
            lost. Try retyping the address or just head back to our home page.
          </p>
          <div className="grid gap-11 pt-8">
            <Link to="/">
              <SecondaryButton secondaryButtonText="Go to Uber.com" />
            </Link>
            <SecondaryButton secondaryButtonText="Go to Uber for Business" />
            <SecondaryButton secondaryButtonText="Go to Uber Careers" />
            <SecondaryButton secondaryButtonText="Go to Uber Eats for Merchants" />
            <SecondaryButton secondaryButtonText="Go to Uber Freight" />
            <SecondaryButton secondaryButtonText="Go to Uber Health" />
          </div>
        </div>
      </main>
    </>
  );
};

export default NoMatch;
