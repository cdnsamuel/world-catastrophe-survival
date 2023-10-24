import { createContext, useContext, useMemo, useState } from "react";

const userContext = createContext();

function useUserContext() {
  return useContext(userContext);
}

function UserContextProvider({ children }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const value = useMemo(() => [user, setUser], [user]);

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
}

export { useUserContext, UserContextProvider };
