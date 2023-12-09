type Props = {
  icon: string;
  text: string;
};

const HomeHeroElementHeader = ({ icon, text }: Props) => {
  return (
    <div className="flex w-24 flex-col items-center justify-center gap-5 px-5 pb-6 pt-5">
      <div className="h-6 w-6">
        <img src={icon} alt="" />
      </div>
      <p className="ext-center text-sm font-medium leading-4">{text}</p>
    </div>
  );
};

export default HomeHeroElementHeader;
