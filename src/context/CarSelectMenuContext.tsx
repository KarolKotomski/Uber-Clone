import { createContext, useState } from "react";

type CarSelectMenuContextProps = {
  children: React.ReactNode;
};

export type CarSelectMenuContextType = {
  isCarSelectMenuActive: boolean | null;
  setIsCarSelectMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CarSelectMenuContext = createContext<CarSelectMenuContextType>({
  isCarSelectMenuActive: false,
  setIsCarSelectMenuActive: () => {},
});

export const CarSelectMenuContextProvider = ({
  children,
}: CarSelectMenuContextProps) => {
  const [isCarSelectMenuActive, setIsCarSelectMenuActive] = useState(false);

  const value = {
    isCarSelectMenuActive,
    setIsCarSelectMenuActive,
  };

  return (
    <CarSelectMenuContext.Provider value={value}>
      {children}
    </CarSelectMenuContext.Provider>
  );
};
