import { createContext, useState } from "react";

type HomeNavModalContextProps = {
  children: React.ReactNode;
};

export type HomeNavModalContextType = {
  isHomeNavModalActive: boolean;
  setIsHomeNavModalActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const HomeNavModalContext = createContext<HomeNavModalContextType>({
  isHomeNavModalActive: false,
  setIsHomeNavModalActive: () => {},
});

export const HomeNavModalContextProvider = ({
  children,
}: HomeNavModalContextProps) => {
  const [isHomeNavModalActive, setIsHomeNavModalActive] =
    useState<boolean>(false);

  const value = {
    isHomeNavModalActive,
    setIsHomeNavModalActive,
  };

  return (
    <HomeNavModalContext.Provider value={value}>
      {children}
    </HomeNavModalContext.Provider>
  );
};
