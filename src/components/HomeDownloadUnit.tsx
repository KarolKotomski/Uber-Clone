import uberAppQr from "../images/uberAppQr.webp";

const HomeDownloadUnit = () => {
  return (
    <div className="flex items-center justify-between bg-white p-6">
      <img src={uberAppQr} alt="Uber App QR code" />
      <div>
        <h3 className="font-UberMove text-2xl">Download the Uber app</h3>
        <p>Scan to download</p>
      </div>
      <svg
        aria-hidden="true"
        focusable="false"
        width="1em"
        height="25"
        fill="currentColor"
        viewBox="0 0 36 36"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.2354 2H24.2711L36 18L24.2711 34H18.2354L28.1237 20.56H0V15.44H28.1237L18.2354 2Z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
  );
};

export default HomeDownloadUnit;