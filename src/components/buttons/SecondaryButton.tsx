type Props = {
  secondaryButtonText?: string;
};

const SecondaryButton = ({ secondaryButtonText }: Props) => {
  return (
    <div className="group relative my-auto w-fit cursor-pointer border-b py-[0.375rem]">
      {secondaryButtonText}
      <div className="absolute bottom-[-0.0625rem] h-[0.0625rem] w-0 bg-black duration-500 group-hover:w-full"></div>
    </div>
  );
};

export default SecondaryButton;
