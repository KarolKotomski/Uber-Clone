import { createContext, useState } from "react";

type SmallScreenContextProps = {
  children: React.ReactNode;
};

export type SmallScreenContextType = {
  isSmallScreen: boolean | null;
  setIsSmallScreen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SmallScreenContext = createContext<SmallScreenContextType>({
  isSmallScreen: false,
  setIsSmallScreen: () => {},
});

export const SmallScreenContextProvider = ({
  children,
}: SmallScreenContextProps) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024);

  const value = {
    isSmallScreen,
    setIsSmallScreen,
  };

  return (
    <SmallScreenContext.Provider value={value}>
      {children}
    </SmallScreenContext.Provider>
  );
};
