type Props = {
  isFilled: boolean;
  isRide: boolean;
};

const SearchCircle = ({ isFilled, isRide }: Props) => {
  const emptyStyle =
    "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm5-2a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z";
  const filledStyle = "M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z";

  const rideStyle =
    "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z";

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
    <svg viewBox="0 0 24 24" fill="black">
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

export default SearchCircle;
