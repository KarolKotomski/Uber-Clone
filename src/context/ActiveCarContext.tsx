import { createContext, useState } from "react";

type ActiveCarContextProps = {
  children: React.ReactNode;
};

export type ActiveCarContextType = {
  activeCarID: number;
  setActiveCarID: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveCarContext = createContext<ActiveCarContextType>({
  activeCarID: 1,
  setActiveCarID: () => {},
});

export const ActiveCarContextProvider = ({
  children,
}: ActiveCarContextProps) => {
  const [activeCarID, setActiveCarID] = useState<number>(1);

  const value = {
    activeCarID,
    setActiveCarID,
  };

  return (
    <ActiveCarContext.Provider value={value}>
      {children}
    </ActiveCarContext.Provider>
  );
};
