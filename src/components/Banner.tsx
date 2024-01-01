import SearchPanel from "./SearchPanel";
import SecondaryButton from "./buttons/SecondaryButton";
import StandardButton from "./buttons/StandardButton";

type Props = {
  content: {
    id: number;
    header: string;
    paragraph: string;
    isHero: boolean;
    image: string;
    altText: string;
  };
};

const Banner = ({ content }: Props) => {
  const { header, paragraph, isHero, image, altText } = content;
  return (
      <div className="container px-6 py-10 sm:px-8 sm:py-14 xl:p-16 flex flex-col gap-9 lg:gap-16 lg:flex-row">
        <div className="flex flex-col justify-center">
          <h1 className="font-UberMove text-4xl leading-[2.75rem] font-bold sm:text-[2.75rem] sm:leading-[3.25rem] lg:leading-[4rem] lg:text-[3.25rem]">
            {header}
          </h1>
          <p>{paragraph}</p>
          {isHero && <SearchPanel />}
          <div className="flex">
            <StandardButton />
            {!isHero && <SecondaryButton />}
          </div>
        </div>
        <div className="lg:w-1/2">
          <img src={image} alt={altText} />
        </div>
      </div>
  );
};

export default Banner;
