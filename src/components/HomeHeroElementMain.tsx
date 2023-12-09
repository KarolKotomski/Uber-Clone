type Props = {
  object: {
    id: number;
    header: string;
    paragraph: string;
    buttonText: string;
    additionalText: string;
  };
};

const HomeHeroElementMain = ({ object }: Props) => {
  return (
    <div className="flex flex-col gap-8 p-12">
      <div className="flex flex-col gap-8">
        <h2 className="font-UberMove text-[3.25rem] font-bold leading-[4rem]">
          {object.header}
        </h2>
        <p>{object.paragraph}</p>
      </div>
      <div className="flex gap-8 items-center flex-wrap">
        <button className="w-fit rounded-lg bg-black px-6 py-3 font-medium text-white">
          {object.buttonText}
        </button>
        <p>{object.additionalText}</p>
      </div>
    </div>
  );
};

export default HomeHeroElementMain;
