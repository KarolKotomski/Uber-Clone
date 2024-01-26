type Props = {
  labelText?: string;
  icon?: React.ReactNode;
  iconOnTheLeft?: boolean;
  iconCustomStyle?: string;
  buttonStyle: string;
};

const HomeNavbarButton = ({
  buttonStyle,
  labelText,
  icon,
  iconOnTheLeft,
  iconCustomStyle,
}: Props) => {
  let applyStyle;
  if (buttonStyle === "white/black") {
    applyStyle = "text-white bg-black hover:bg-greyHover";
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
    >
      {!iconOnTheLeft && labelText}

      {icon && <div className={iconClass}>{icon}</div>}

      {iconOnTheLeft && labelText}
    </button>
  );
};

export default HomeNavbarButton;
