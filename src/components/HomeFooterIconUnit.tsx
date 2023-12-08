type Props = {
  iconAlt: string;
  iconImage: string;
};

const HomeFooterIconUnit = ({ iconAlt, iconImage }: Props) => {
  return (
    <button className="flex h-12 w-12 items-center justify-center rounded-lg transition-colors hover:bg-greyHover">
      <img src={iconImage} alt={iconAlt} className="h-4 w-4" />
    </button>
  );
};

export default HomeFooterIconUnit;
