import AuthProvider from "./authContext/authContext";
import UserProvider from "./userContext/userContext";
import { CookiesProvider } from "react-cookie";

export default function AppProvider({ children }) {
  return (
    <CookiesProvider>
      <UserProvider>
        <AuthProvider>{children}</AuthProvider>
      </UserProvider>
    </CookiesProvider>
  );
}
