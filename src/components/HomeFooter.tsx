import google from "../icons/google.svg";
import apple from "../icons/apple.svg";
import HomeFooterListUnit from "./HomeFooterListUnit";
import { footerList, icons } from "../data/data";
import HomeFooterIconUnit from "./HomeFooterIconUnit";

const HomeFooter = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container p-16 text-sm">
        <div className="flex flex-col">
          <p className="text-right">
            How the Uber and Uber Eats apps and websites work
          </p>
          <h3 className="py-10 font-UberMove text-2xl">Uber</h3>
          <p className="text-base">Visit Help Center</p>
        </div>
        <div className="my-20 grid grid-cols-4">
          {footerList.map((element, index) => {
            return (
              <HomeFooterListUnit
                key={index}
                label={element.label}
                list={element.list}
              />
            );
          })}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-16">
            {icons.map((element, index) => {
              return (
                <HomeFooterIconUnit
                  key={index}
                  iconAlt={element.name}
                  iconImage={element.icon}
                />
              );
            })}
          </div>
          <div className="flex items-center">
            <button className="flex items-center  justify-center rounded-lg px-3 py-2 transition-colors hover:bg-greyHover">
              <div className="mr-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Zm8 11c0 .7-.1 1.4-.3 2-.6-1.5-1.6-3.1-3-4.7l1.8-1.8c1 1.3 1.5 2.8 1.5 4.5ZM6.5 6.5c1.3 0 3.6.8 6 2.9l-3.2 3.2C7.1 9.8 6.5 7.5 6.5 6.5Zm8.1 5c2.3 2.7 2.9 5 2.9 6-1.3 0-3.6-.8-6-2.9l3.1-3.1Zm1.9-6.1-1.9 1.9c-1.6-1.4-3.2-2.4-4.7-3 .7-.2 1.3-.3 2-.3 1.8 0 3.3.5 4.6 1.4ZM4 12c0-.7.1-1.4.3-2 .6 1.5 1.6 3.1 3 4.7l-1.8 1.8C4.5 15.2 4 13.7 4 12Zm3.5 6.6 1.9-1.9c1.6 1.4 3.2 2.4 4.7 3-.7.2-1.3.3-2 .3-1.8 0-3.3-.5-4.6-1.4Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              English
            </button>
            <button className="flex items-center justify-center rounded-lg px-3 py-2 transition-colors hover:bg-greyHover">
              <div className="mr-2">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18.7 3.8C15 .1 9 .1 5.3 3.8c-3.7 3.7-3.7 9.8 0 13.5L12 24l6.7-6.8c3.7-3.6 3.7-9.7 0-13.4ZM12 12.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              Warsaw
            </button>
          </div>
        </div>
        <div className="my-14 flex items-center gap-2">
          <button>
            <div>
              <img src={google} alt="google app store" className="w-32" />
            </div>
          </button>
          <button>
            <div>
              <img src={apple} alt="apple app store" className="w-32" />
            </div>
          </button>
        </div>
        <div className="flex items-center justify-between text-xs text-[#AFAFAF]">
          <p>© 2023 Uber Technologies Inc.</p>
          <div className="flex items-center justify-between gap-5">
            <p className="w-fit cursor-pointer transition-colors hover:text-greyActive">
              Privacy
            </p>
            <p className="w-fit cursor-pointer transition-colors hover:text-greyActive">
              Accessibility
            </p>
            <p className="w-fit cursor-pointer transition-colors hover:text-greyActive">
              Terms
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
