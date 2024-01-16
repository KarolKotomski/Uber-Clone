import { createContext, useState } from "react";

type SmallScreenContextProps = {
  children: React.ReactNode;
};

export type SmallScreenContextType = {
  isMenuActive: boolean | null;
  setIsMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SmallScreenContext = createContext<SmallScreenContextType>({
  isMenuActive: false,
  setIsMenuActive: () => {},
});

export const SmallScreenContextProvider = ({
  children,
}: SmallScreenContextProps) => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const value = {
    isMenuActive,
    setIsMenuActive,
  };

  return (
    <SmallScreenContext.Provider value={value}>
      {children}
    </SmallScreenContext.Provider>
  );
};
