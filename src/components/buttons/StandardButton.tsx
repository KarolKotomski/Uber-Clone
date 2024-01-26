import { Link } from "react-router-dom";

type Props = {
  buttonText?: string;
  buttonLinkTo?: string;
  buttonStyle: string;
  icon?: string;
};

const StandardButton = ({
  buttonStyle,
  buttonText,
  buttonLinkTo = "",
  icon,
}: Props) => {
  let applyStyle;
  if (buttonStyle === "black") {
    applyStyle = "bg-black text-white hover:bg-greyHover";
  }
  if (buttonStyle === "white") {
    applyStyle = "bg-white text-black hover:bg-lightGrey2";
  }
  if (buttonStyle === "grey") {
    applyStyle = "bg-lightGrey2 text-black hover:bg-whiteHover";
  }

  return (
    <Link to={buttonLinkTo}>
      <button
        type="button"
        className={`w-full rounded-lg px-[1.5625rem] py-[0.875rem] font-medium leading-5 transition-colors duration-200 ${applyStyle}`}
      >
        {icon}
        {buttonText}
      </button>
    </Link>
  );
};

export default StandardButton;

// invertedColors
// ? "bg-white text-black hover:bg-lightGrey2"
// : "bg-black text-white hover:bg-greyHover"
