import { Link } from "react-router-dom";

type Props = {
  invertedColors?: boolean;
  buttonText?: string;
  buttonLinkTo?: string;
};

const StandardButton = ({
  invertedColors,
  buttonText,
  buttonLinkTo = "",
}: Props) => {
  return (
    <Link to={buttonLinkTo}>
      <button
        type="button"
        className={`rounded-lg px-[1.5625rem] py-[0.875rem] font-medium leading-5 transition-colors duration-200 ${
          invertedColors
            ? "bg-white text-black hover:bg-lightGrey2"
            : "bg-black text-white hover:bg-greyHover"
        }`}
      >
        {buttonText}
      </button>
    </Link>
  );
};

export default StandardButton;
