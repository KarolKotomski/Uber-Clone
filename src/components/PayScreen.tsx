import StandardButton from "./buttons/StandardButton";
import masterCard from "../images/mastercard.png";
import Chevron from "./icons/Chevron";
import { useContext, useEffect, useState } from "react";
import { ActiveCarContext } from "../context/ActiveCarContext";
import { carUnitData } from "../utilities/CarUnitData";

const PayScreen = () => {
  const { activeCarID } = useContext(ActiveCarContext);
  const [buttonText, setButtonText] = useState("");

  useEffect(() => {
    const foundUnit = carUnitData.find((unit) => activeCarID === unit.id);

    foundUnit && setButtonText(`Order: ${foundUnit.name}`);
  }, [activeCarID]);

  return (
    <div className="absolute bottom-0 left-0 right-3 bg-white text-sm lg:left-4 lg:w-[23.5rem] lg:pb-5">
      <div className="flex w-full flex-col items-center gap-4 border-t p-4 lg:rounded-xl lg:border-t-0 lg:shadow-[0_4px_16px_0px_rgba(0,0,0,0.16)]">
        <div className="flex w-full items-center justify-between gap-3 whitespace-nowrap">
          <div className="flex gap-3">
            <img src={masterCard} alt="mastercard" className="w-5" />
            <p className="cursor-pointer font-medium">Mastercard •••• 1234</p>
          </div>

          <span className="-rotate-90">
            <Chevron />
          </span>
        </div>
        <div className="w-full text-base">
          <StandardButton
            buttonText={buttonText}
            buttonLinkTo="/payment_complete"
          />
        </div>
      </div>
    </div>
  );
};

export default PayScreen;
