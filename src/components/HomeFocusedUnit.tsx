import focused1 from "../images/focused1.webp";

type Props = {
  picture: string;
  header: string;
  paragraph: string;
  additionals: string[];
};

const HomeFocusedUnit = ({
  picture,
  header,
  paragraph,
  additionals,
}: Props) => {
  return (
    <div className="flex flex-col gap-5">
      <img
        src={picture}
        alt="taxi driver man drives a car with a woman as a passenger"
        className="w-full"
      />
      <h3 className="text-lg font-medium">{header}</h3>
      <p>{paragraph}</p>
      <div className="mt-3 flex gap-5">
        {additionals.map((additional) => {
          return <div>{additional}</div>;
        })}
      </div>
    </div>
  );
};

export default HomeFocusedUnit;
