type Props = {
  invertedColors?: boolean;
  buttonText: string;
};

const StandardButton = ({ invertedColors, buttonText }: Props) => {
  return (
    <button
      className={`rounded-lg px-[1.5625rem] py-[0.875rem] font-medium ${
        invertedColors ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      {buttonText}
    </button>
  );
};

export default StandardButton;
