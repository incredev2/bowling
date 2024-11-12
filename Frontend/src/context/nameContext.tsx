import { createContext, useState, ReactNode } from "react";

interface NameContextType {
  name: string;
  setName: (name: string) => void;
}

interface NameProviderProps {
  children: ReactNode;
}

export const NameContext = createContext<NameContextType>({
  name: "",
  setName: () => {},
});

export const NameProvider = ({ children }: NameProviderProps) => {
  const [name, setName] = useState("");

  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
};
