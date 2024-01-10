type Props = {
  isFilled: boolean;
};

const SearchSquare = ({ isFilled }: Props) => {
  const emptyStyle = "M14 10h-4v4h4v-4ZM7 7v10h10V7H7Z";
  const filledStyle = "M17 7H7v10h10V7Z";

  return (
    <svg viewBox="0 0 24 24" fill="none">
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

export default SearchSquare;
