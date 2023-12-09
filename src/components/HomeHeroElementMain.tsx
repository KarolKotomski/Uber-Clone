type Props = {
  content: {
    id: number;
    header: string;
    paragraph: string;
    buttonText: string;
    additionalText: string;
  };
};

const HomeHeroElementMain = ({ content }: Props) => {
  return (
    <div className="flex flex-col gap-8 p-12">
      <div className="flex flex-col gap-8">
        <h2 className="font-UberMove text-[3.25rem] font-bold leading-[4rem]">
          {content.header}
        </h2>
        <p>{content.paragraph}</p>
      </div>
      <div className="flex flex-wrap items-center gap-8">
        <button className="w-fit rounded-lg bg-black px-6 py-3 font-medium text-white">
          {content.buttonText}
        </button>
        <p>{content.additionalText}</p>
      </div>
    </div>
  );
};

export default HomeHeroElementMain;
