type Props = {
  isFilled: boolean;
  isRide: boolean;
};

const SearchSquare = ({ isFilled, isRide }: Props) => {
  const emptyStyle = "M14 10h-4v4h4v-4ZM7 7v10h10V7H7Z";
  const filledStyle = "M17 7H7v10h10V7Z";
  const rideStyle = "M22 2H2v20h20V2Zm-7 7H9v6h6V9Z";

  let buttonStyle;
  if (isFilled && !isRide) {
    buttonStyle = filledStyle;
  } else {
    buttonStyle = emptyStyle;
  }
  if (isRide) {
    buttonStyle = rideStyle;
  }

  return (
    <svg viewBox="0 0 24 24" fill="none">
      <title>search</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d={buttonStyle}
        fill="currentColor"
      ></path>
    </svg>
  );
};

export default SearchSquare;
