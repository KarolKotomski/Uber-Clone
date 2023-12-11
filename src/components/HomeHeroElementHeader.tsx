type Props = {
  icon: string;
  label: string;
  id: number;
  handleClick: (id: number) => void;
};

const HomeHeroElementHeader = ({ icon, label, id, handleClick }: Props) => {
  return (
    <div
      className="flex w-[6.5rem] cursor-pointer flex-col items-center justify-between gap-5 px-5 pb-6 pt-5 transition-colors hover:text-greyActive"
      onClick={() => handleClick(id)}
    >
      <div className="h-6 w-6">
        <img src={icon} alt={label} />
      </div>
      <div className="flex h-8 items-center">
        <p className="text-center text-sm font-medium leading-4">{label}</p>
      </div>
    </div>
  );
};

export default HomeHeroElementHeader;
