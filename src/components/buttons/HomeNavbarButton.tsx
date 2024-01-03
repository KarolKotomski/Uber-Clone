type Props = {
  labelText?: string;
  altText?: string;
  icon?: string;
  iconOnTheLeft?: boolean;
  iconCustomStyle?: string;
  buttonCustomStyle?: string;
};

const HomeNavbarButton = ({
  labelText,
  altText,
  icon,
  iconOnTheLeft,
  iconCustomStyle,
  buttonCustomStyle,
}: Props) => {
  const buttonClass = `flex items-center gap-2 rounded-full px-[12px] py-[10px] transition-colors duration-200 hover:bg-greyHover active:bg-greyActive ${buttonCustomStyle}`;

  const iconClass = `w-4 fill-white text-white ${iconCustomStyle}`;

  return (
    <button className={buttonClass}>
      {!iconOnTheLeft && labelText}
      {icon && altText && (
        <div className={iconClass}>
          <img src={icon} alt={altText} className="fill-white text-white " />
        </div>
      )}
      {iconOnTheLeft && labelText}
    </button>
  );
};

export default HomeNavbarButton;
