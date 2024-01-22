import { createContext, useState } from "react";

type RideResultsContextProps = {
  children: React.ReactNode;
};

export type RideResultsContextType = {
  isRideResultsActive: boolean | null;
  setIsRideResultsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const RideResultsContext = createContext<RideResultsContextType>({
  isRideResultsActive: false,
  setIsRideResultsActive: () => {},
});

export const RideResultsContextProvider = ({
  children,
}: RideResultsContextProps) => {
  const [isRideResultsActive, setIsRideResultsActive] = useState(false);

  const value = {
    isRideResultsActive,
    setIsRideResultsActive,
  };

  return (
    <RideResultsContext.Provider value={value}>
      {children}
    </RideResultsContext.Provider>
  );
};
