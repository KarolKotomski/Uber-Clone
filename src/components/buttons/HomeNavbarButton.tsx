type Props = {
  labelText?: string;
  icon?: React.ReactNode;
  iconOnTheLeft?: boolean;
  iconCustomStyle?: string;
  buttonStyle: string;
  handleClick?: () => void;
  applyFocus?: boolean;
};

const HomeNavbarButton = ({
  buttonStyle,
  labelText,
  icon,
  iconOnTheLeft,
  iconCustomStyle,
  handleClick,
  applyFocus,
}: Props) => {
  let applyStyle;
  if (buttonStyle === "white/black") {
    applyStyle =
      "text-white bg-black hover:bg-greyHover " +
      (applyFocus && "focus:bg-greyActive");
  }
  if (buttonStyle === "black/white") {
    applyStyle = "text-black bg-white hover:bg-lightGrey2";
  }
  if (buttonStyle === "black/grey") {
    applyStyle = "text-black bg-white hover:bg-lightGrey";
  }

  const iconClass = `w-4 ${iconCustomStyle}`;

  return (
    <button
      className={`flex items-center gap-2 rounded-full p-3 transition-colors duration-300 ${applyStyle}`}
      onClick={handleClick}
    >
      {!iconOnTheLeft && labelText}

      {icon && <div className={iconClass}>{icon}</div>}

      {iconOnTheLeft && labelText}
    </button>
  );
};

export default HomeNavbarButton;
