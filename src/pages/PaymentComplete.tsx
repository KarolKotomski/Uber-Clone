import { useContext, useEffect, useState } from "react";
import StandardButton from "../components/buttons/StandardButton";
import paymentImage from "../images/payment_confirmed.gif";
import { setDestination, setDirections, setOrigin } from "../slices/navSlice";
import { useDispatch } from "react-redux";
import { ActiveCarContext } from "../context/ActiveCarContext";
import { carUnitData } from "../utilities/CarUnitData";

const PaymentComplete = () => {
  const [uberType, setUberType] = useState("");

  const dispatch = useDispatch();

  const { activeCarID } = useContext(ActiveCarContext);

  useEffect(() => {
    const foundUnit = carUnitData.find((unit) => activeCarID === unit.id);

    foundUnit && setUberType(foundUnit.name);
  }, [activeCarID]);

  const handleClick = () => {
    dispatch(setOrigin(null));
    dispatch(setDestination(null));
    dispatch(setDirections(null));
  };

  useEffect(() => {
    console.log(activeCarID);
    console.log("useEffect in PaymentComplete is called");
  }, [activeCarID]);

  return (
    <div className="mx-auto flex h-screen max-w-[50%] flex-col items-center justify-center gap-5 sm:py-5 lg:max-w-[35%] lg:py-10">
      <h2 className="whitespace-nowrap p-2 font-UberMove text-3xl lg:text-4xl xl:text-6xl">
        Payment confirmed
      </h2>
      <div className="w-full">
        <img src={paymentImage} alt="payment confirmed" className="w-full" />
      </div>
      <p className="text-md whitespace-nowrap p-2 text-center font-semibold lg:text-xl xl:text-2xl">
        You've successfully ordered an Uber {uberType}.<br /> Have a great ride!
      </p>
      <div onClick={handleClick}>
        <StandardButton buttonLinkTo="/" buttonText="HomePage" />
      </div>
    </div>
  );
};

export default PaymentComplete;
