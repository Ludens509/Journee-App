import { useEffect } from "react";
import apiService from "./apiService/apiService.mjs";
import { useAuth } from "./context/authContext/index.jsx";
import { useUser } from "./context/userContext/index.jsx";
import AppRouter from "./routes/router.jsx";



function App() {
  const { cookies, logout } = useAuth();
  const { setUser, user } = useUser();

  async function getData() {
    try {
      if (!user && cookies.token) {
        // console.log(cookies.token);
        let res = await apiService.getUser(cookies.token);

        setUser(res);
      } else {
        return;
      }
    } catch (err) {
      // Only logout on authorization errors (401). Other errors shouldn't remove the token.
      const status = err?.response?.status || err?.status;
      if (status === 401) {
        logout();
      } else {
        console.error(err);
      }
    }
  }

  useEffect(() => {
    if (cookies.token) {
      getData();
    }
  }, [cookies.token]);

  return (
    <>
        <AppRouter />   
    </>
  );
}

export default App;
