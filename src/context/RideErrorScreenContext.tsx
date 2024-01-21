import { createContext, useState } from "react";

type RideErrorScreenContextProps = {
  children: React.ReactNode;
};

export type RideErrorScreenContextType = {
  isRideError: boolean | null;
  setIsRideError: React.Dispatch<React.SetStateAction<boolean>>;
};

export const RideErrorScreenContext = createContext<RideErrorScreenContextType>(
  {
    isRideError: false,
    setIsRideError: () => {},
  },
);

export const RideErrorScreenContextProvider = ({
  children,
}: RideErrorScreenContextProps) => {
  const [isRideError, setIsRideError] = useState(false);

  const value = {
    isRideError,
    setIsRideError,
  };

  return (
    <RideErrorScreenContext.Provider value={value}>
      {children}
    </RideErrorScreenContext.Provider>
  );
};
