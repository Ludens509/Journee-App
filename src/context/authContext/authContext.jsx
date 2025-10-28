import { useCookies } from "react-cookie";
import { createContext, useMemo} from "react";
import axios from "axios";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const connStr = `https://journee-backend.onrender.com/api`;

  async function signUp(formData) {
    let res = await axios.post(`${connStr}/users`, formData);

    
    setCookie("token", res.data.token);
  }

   async function login(formData) {
    let res = await axios.post(`${connStr}/auth`, formData);

    
    setCookie("token", res.data.token);
  }

  function logout() {
    ["token"].forEach((token) => removeCookie(token));
  }

  const value = useMemo(
    () => ({
      cookies,
      login,
      signUp,
      logout,
    }),
    [cookies]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthContext };

