type Props = {
  header: string | undefined;
  paragraph: string | undefined;
  buttonText: string | undefined;
  additionalText: string | undefined;
  isButton: boolean | undefined;
};

const HomeHeroElementMain = ({
  header,
  paragraph,
  buttonText,
  additionalText,
  isButton,
}: Props) => {
  return (
    <div className="flex flex-col gap-8 p-6 sm:p-8 xl:p-12">
      <div className="flex flex-col gap-8">
        <h2 className="font-UberMove text-4xl font-bold leading-[2.75rem] sm:text-[2.75rem] sm:leading-[3.25rem] lg:text-[3.25rem] lg:leading-[4rem]">
          {header}
        </h2>
        <p>{paragraph}</p>
      </div>
      <div className="flex flex-wrap items-center gap-8">
        <button className="w-fit rounded-lg bg-black px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-greyHover">
          {buttonText}
        </button>
        {isButton ? (
          <button className="w-fit rounded-lg bg-lightGrey2 px-6 py-3 font-medium text-black">
            {additionalText}
          </button>
        ) : (
          <p>{additionalText}</p>
        )}
      </div>
    </div>
  );
};

export default HomeHeroElementMain;
