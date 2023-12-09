type Props = {
  header: string;
  qrCode: string;
};

const HomeDownloadUnit = ({ header, qrCode }: Props) => {
  return (
    <div className="flex items-center justify-between bg-white p-6">
      <img src={qrCode} alt="Uber App QR code" />
      <div className="p-5">
        <h3 className="font-UberMove text-2xl font-bold">{header}</h3>
        <p>Scan to download</p>
      </div>
      <div>
        <svg
          aria-hidden="true"
          focusable="false"
          fill="currentColor"
          viewBox="0 0 36 36"
          className="h-4 w-4"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.2354 2H24.2711L36 18L24.2711 34H18.2354L28.1237 20.56H0V15.44H28.1237L18.2354 2Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HomeDownloadUnit;
