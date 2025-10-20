// import AppRouter from "./routes/router";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layouts/layout";
import PostDetails from "./pages/Post/PostDetails";
import PostViewList from "./pages/Post/PostViewList";
import FavoritePost from "./pages/Like/FavoritePost";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage/AuthPage";
import ProtectedRoutes from "./components/ProtectedRoutes";
import apiService from "./apiService/apiService.mjs";
import { useAuth } from "./context/authContext/index.jsx";
import { useUser } from "./context/userContext/index.jsx";
// import axios from "axios";

function App() {
  const { cookies, logout } = useAuth();
  const { setUser,  } = useUser();

  async function getData() {
    try {
      //Getting all the posts
      // let res = await axios.get(`http://localhost:3000/api/posts`);
      // setPost(res.data);

      if (cookies.token) {
        let res = await apiService.getUser(cookies.token);

        setUser(res);
      }
      
      // console.log("see",res)
    } catch (err) {
      logout();
      console.error(err);
    }
  }

  useEffect(() => {
    if (cookies.token) {
      getData();
    }
  }, [cookies.token]);

  return (
    <>
      <div className="h-screen w-full overflow-auto">
        {/* <AppRouter /> */}

        <Routes>
          <Route path={""} element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<AuthPage />} />

            <Route element={<ProtectedRoutes />}>
              <Route path="/posts/:id" element={<PostDetails />} />
              <Route path="/posts" element={<PostViewList />} />
              <Route path="/liked" element={<FavoritePost />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
