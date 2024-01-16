import { createContext, useState } from "react";

type SearchMenuContextProps = {
  children: React.ReactNode;
};

export type SearchMenuContextType = {
  isSearchMenuActive: boolean | null;
  setIsSearchMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SearchMenuContext = createContext<SearchMenuContextType>({
  isSearchMenuActive: false,
  setIsSearchMenuActive: () => {},
});

export const SearchMenuContextProvider = ({
  children,
}: SearchMenuContextProps) => {
  const [isSearchMenuActive, setIsSearchMenuActive] = useState(false);

  const value = {
    isSearchMenuActive,
    setIsSearchMenuActive,
  };

  return (
    <SearchMenuContext.Provider value={value}>
      {children}
    </SearchMenuContext.Provider>
  );
};
