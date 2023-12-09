import person from "../icons/person.svg";
type Props = {
  icon: string;
  header: string;
  paragraph: string;
  link: string;
};

const HomeAboutUnit = ({ icon, header, paragraph, link }: Props) => {
  return (
    <div className="flex flex-col gap-5">
      <img
        src={icon}
        alt="taxi driver man drives a car with a woman as a passenger"
        className="h-6 w-6"
      />
      <h3 className="text-lg font-medium">{header}</h3>
      <p>{paragraph}</p>
      <div className="mt-3 flex gap-5">
        <div>{link}</div>
      </div>
    </div>
  );
};

export default HomeAboutUnit;
