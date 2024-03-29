import SearchPanel from "./SearchPanel";
import SecondaryButton from "./buttons/SecondaryButton";
import StandardButton from "./buttons/StandardButton";

type Props = {
  content: {
    id: number;
    header: string;
    paragraph: string;
    image: string;
    altText: string;
  };
  buttonStyle: string;
  buttonText?: string;
  buttonLinkTo?: string;
  switchPicture?: boolean;
  searchPanel?: boolean;
  secondaryButton?: boolean;
  secondaryButtonText?: string;
};

const Banner = ({
  content,
  buttonStyle,
  buttonText,
  buttonLinkTo,
  switchPicture,
  searchPanel,
  secondaryButton,
  secondaryButtonText,
}: Props) => {
  const { header, paragraph, image, altText } = content;
  return (
    <div
      className={`container flex flex-col gap-9 px-6 py-10 sm:px-8 sm:py-14 ${
        switchPicture ? "lg:flex-row-reverse" : "lg:flex-row"
      } lg:gap-16 xl:p-16`}
    >
      <div className={`flex lg:w-1/2 ${switchPicture && "justify-end"}`}>
        <div className="flex w-full flex-col justify-center gap-5 lg:w-4/5">
          <h1 className="font-UberMove text-4xl font-bold leading-[2.75rem] sm:text-[2.75rem] sm:leading-[3.25rem] lg:text-[3.25rem] lg:leading-[4rem]">
            {header}
          </h1>
          <div className="flex flex-col gap-3">
            <p>{paragraph}</p>
            {searchPanel && <SearchPanel isRide={false} />}
          </div>
          <div className="flex flex-wrap gap-6">
            {buttonText && (
              <StandardButton
                buttonText={buttonText}
                buttonStyle={buttonStyle}
                buttonLinkTo={buttonLinkTo}
              />
            )}

            {secondaryButton && (
              <SecondaryButton secondaryButtonText={secondaryButtonText} />
            )}
          </div>
        </div>
      </div>
      <div className="lg:w-1/2">
        <img src={image} alt={altText} />
      </div>
    </div>
  );
};

export default Banner;
