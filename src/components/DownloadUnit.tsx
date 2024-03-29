type Props = {
  header: string;
  qrCode: string;
};

const DownloadUnit = ({ header, qrCode }: Props) => {
  return (
    <div className="group flex cursor-pointer items-center justify-between border bg-white p-4 sm:p-6 lg:border-none">
      <div className="flex items-center">
        <img src={qrCode} alt="Uber App QR code" className="w-20 sm:w-36" />
        <div className="p-5">
          <h3 className="font-UberMove text-xl font-bold sm:text-2xl">
            {header}
          </h3>
          <p className="hidden sm:block">Scan to download</p>
        </div>
      </div>
      <div>
        <svg
          aria-hidden="true"
          focusable="false"
          fill="currentColor"
          viewBox="0 0 36 36"
          className="h-4 w-4 duration-500 group-hover:translate-x-2/3 sm:group-hover:translate-x-full"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.2354 2H24.2711L36 18L24.2711 34H18.2354L28.1237 20.56H0V15.44H28.1237L18.2354 2Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default DownloadUnit;
