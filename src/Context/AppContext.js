import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [id, setId] = useState(null);

  return (
    <AppContext.Provider value={{ id, setId }}>{children}</AppContext.Provider>
  );
};
