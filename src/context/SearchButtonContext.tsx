import { createContext, useState } from "react";

type SearchButtonContextProps = {
  children: React.ReactNode;
};

export type SearchButtonContextType = {
  isSearchButtonActive: boolean | null;
  setIsSearchButtonActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SearchButtonContext = createContext<SearchButtonContextType>({
  isSearchButtonActive: false,
  setIsSearchButtonActive: () => {},
});

export const SearchButtonContextProvider = ({
  children,
}: SearchButtonContextProps) => {
  const [isSearchButtonActive, setIsSearchButtonActive] = useState(false);

  const value = {
    isSearchButtonActive,
    setIsSearchButtonActive,
  };

  return (
    <SearchButtonContext.Provider value={value}>
      {children}
    </SearchButtonContext.Provider>
  );
};
