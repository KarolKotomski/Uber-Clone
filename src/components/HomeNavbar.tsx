const HomeNavbar = () => {
  return (
    <nav className="bg-black py-3 font-medium text-white">
      <div className="container flex items-center justify-between px-16">
        <div className="flex items-center text-sm">
          <ul>
            <li className="font-UberMove text-2xl">Uber</li>
          </ul>
          <ul className="mx-6 flex gap-1 leading-4">
            <li className="hover:bg-greyHover active:bg-greyActive rounded-full px-[12px] py-[10px] transition-colors duration-200">
              <button className="flex items-center gap-2">
                Company
                <div>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M18 8v3.8l-6 4.6-6-4.6V8l6 4.6L18 8Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </li>
            <li>
              <button className="hover:bg-greyHover active:bg-greyActive rounded-full px-[12px] py-[10px] transition-colors duration-200">
                Safety
              </button>
            </li>
            <li>
              <button className="hover:bg-greyHover active:bg-greyActive rounded-full px-[12px] py-[10px] transition-colors duration-200">
                Help
              </button>
            </li>
          </ul>
        </div>
        <ul className="flex gap-1 text-sm leading-4">
          <li>
            <button className="hover:bg-greyHover active:bg-greyActive flex items-center gap-2 rounded-full px-[12px] py-[10px] transition-colors duration-200">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Zm8 11c0 .7-.1 1.4-.3 2-.6-1.5-1.6-3.1-3-4.7l1.8-1.8c1 1.3 1.5 2.8 1.5 4.5ZM6.5 6.5c1.3 0 3.6.8 6 2.9l-3.2 3.2C7.1 9.8 6.5 7.5 6.5 6.5Zm8.1 5c2.3 2.7 2.9 5 2.9 6-1.3 0-3.6-.8-6-2.9l3.1-3.1Zm1.9-6.1-1.9 1.9c-1.6-1.4-3.2-2.4-4.7-3 .7-.2 1.3-.3 2-.3 1.8 0 3.3.5 4.6 1.4ZM4 12c0-.7.1-1.4.3-2 .6 1.5 1.6 3.1 3 4.7l-1.8 1.8C4.5 15.2 4 13.7 4 12Zm3.5 6.6 1.9-1.9c1.6 1.4 3.2 2.4 4.7 3-.7.2-1.3.3-2 .3-1.8 0-3.3-.5-4.6-1.4Z"
                  fill="currentColor"
                ></path>
              </svg>
              EN
            </button>
          </li>
          <li>
            <button className="hover:bg-greyHover active:bg-greyActive rounded-full px-[12px] py-[10px] transition-colors duration-200 flex items-center gap-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.66671 3C0.930328 3 0.333374 2.40305 0.333374 1.66667C0.333374 0.930286 0.930328 0.333333 1.66671 0.333333C2.40309 0.333333 3.00004 0.930287 3.00004 1.66667C3.00004 2.40305 2.40309 3 1.66671 3ZM7.00004 3C6.26366 3 5.66671 2.40305 5.66671 1.66667C5.66671 0.930287 6.26366 0.333333 7.00004 0.333333C7.73642 0.333333 8.33337 0.930287 8.33337 1.66667C8.33337 2.40305 7.73642 3 7.00004 3ZM12.3334 3C11.597 3 11 2.40305 11 1.66667C11 0.930287 11.597 0.333333 12.3334 0.333333C13.0698 0.333333 13.6667 0.930287 13.6667 1.66667C13.6667 2.40305 13.0698 3 12.3334 3ZM1.66671 8.33333C0.930328 8.33333 0.333374 7.73638 0.333374 7C0.333374 6.26362 0.930328 5.66667 1.66671 5.66667C2.40309 5.66667 3.00004 6.26362 3.00004 7C3.00004 7.73638 2.40309 8.33333 1.66671 8.33333ZM7.00004 8.33333C6.26366 8.33333 5.66671 7.73638 5.66671 7C5.66671 6.26362 6.26366 5.66667 7.00004 5.66667C7.73642 5.66667 8.33337 6.26362 8.33337 7C8.33337 7.73638 7.73642 8.33333 7.00004 8.33333ZM12.3334 8.33333C11.597 8.33333 11 7.73638 11 7C11 6.26362 11.597 5.66667 12.3334 5.66667C13.0698 5.66667 13.6667 6.26362 13.6667 7C13.6667 7.73638 13.0698 8.33333 12.3334 8.33333ZM0.333374 12.3333C0.333374 13.0697 0.930328 13.6667 1.66671 13.6667C2.40309 13.6667 3.00004 13.0697 3.00004 12.3333C3.00004 11.597 2.40309 11 1.66671 11C0.930328 11 0.333374 11.597 0.333374 12.3333ZM5.66671 12.3333C5.66671 13.0697 6.26366 13.6667 7.00004 13.6667C7.73642 13.6667 8.33337 13.0697 8.33337 12.3333C8.33337 11.597 7.73642 11 7.00004 11C6.26366 11 5.66671 11.597 5.66671 12.3333ZM11 12.3333C11 13.0697 11.597 13.6667 12.3334 13.6667C13.0698 13.6667 13.6667 13.0697 13.6667 12.3333C13.6667 11.597 13.0698 11 12.3334 11C11.597 11 11 11.597 11 12.3333Z"
                  fill="white"
                ></path>
              </svg>
              Products
            </button>
          </li>
          <li>
            <button className="hover:bg-whiteHover active:bg-greyActive rounded-full px-[12px] py-[10px] transition-colors duration-200 bg-white text-black ml-4">
              Log in
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HomeNavbar;
