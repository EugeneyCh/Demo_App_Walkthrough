import { createContext, useState } from "react";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: () => {},
  logout: () => {},
});

function AuthContextProvider() {
  const [authToken, setAuthToken] = useState();

  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
