type Props = {
  header: string | undefined;
  paragraph: string | undefined;
  buttonText: string | undefined;
  additionalText: string | undefined;
  id: number | undefined;
};

const HomeHeroElementMain = ({
  header,
  paragraph,
  buttonText,
  additionalText,
  id,
}: Props) => {
  return (
    <div className="flex flex-col gap-8 p-12">
      <div className="flex flex-col gap-8">
        <h2 className="font-UberMove text-[3.25rem] font-bold leading-[4rem]">
          {header}
        </h2>
        <p>{paragraph}</p>
      </div>
      <div className="flex flex-wrap items-center gap-8">
        <button className="w-fit rounded-lg bg-black px-6 py-3 font-medium text-white">
          {buttonText}
        </button>
        {id !== 3 ? (
          <p>{additionalText}</p>
        ) : (
          <button className="bg-lightGrey2 w-fit rounded-lg px-6 py-3 font-medium text-black">
            {additionalText}
          </button>
        )}
      </div>
    </div>
  );
};

export default HomeHeroElementMain;
