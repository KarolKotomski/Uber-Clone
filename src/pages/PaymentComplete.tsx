import StandardButton from "../components/buttons/StandardButton";
import paymentImage from "../images/payment_confirmed.gif";
import { setDestination, setDirections, setOrigin } from "../slices/navSlice";
import { useDispatch } from "react-redux";

const PaymentComplete = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setOrigin(null));
    dispatch(setDestination(null));
    dispatch(setDirections(null));
  };

  return (
    <div className="mx-auto flex h-screen max-w-[50%] flex-col items-center justify-center gap-5 sm:py-5 lg:max-w-[35%] lg:py-10">
      <h2 className="whitespace-nowrap p-2 font-UberMove text-3xl md:text-4xl lg:text-6xl">
        Payment confirmed
      </h2>
      <div className="w-full">
        <img src={paymentImage} alt="payment confirmed" className="w-full" />
      </div>
      <p className="text-md whitespace-nowrap p-2 text-center font-semibold md:text-xl lg:text-2xl">
        You've successfully ordered an Uber.
        <br /> Have a great and safe ride!
      </p>
      <div onClick={handleClick}>
        <StandardButton buttonLinkTo="/" buttonText="Home Page" />
      </div>
    </div>
  );
};

export default PaymentComplete;
