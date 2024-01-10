type Props = {
  isFilled: boolean;
};

const SearchCircle = ({ isFilled }: Props) => {
  const emptyStyle =
    "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm5-2a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z";
  const filledStyle = "M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z";

  return (
    <svg viewBox="0 0 24 24" fill="black">
      <title>search</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d={isFilled ? filledStyle : emptyStyle}
        fill="currentColor"
      ></path>
    </svg>
  );
};

export default SearchCircle;
