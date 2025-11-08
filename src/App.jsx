
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import apiService from "./apiService/apiService.mjs";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Layout from "./components/layouts/Layout.jsx";
import { useAuth } from "./context/authContext/index.jsx";
import { useUser } from "./context/userContext/index.jsx";
import AuthPage from "./pages/AuthPage/AuthPage";
import Home from "./pages/Home";
import FavoritePost from "./pages/Like/FavoritePost";
import PostDetails from "./pages/Post/PostDetails";
import PostEditView from "./pages/Post/PostEditView.jsx";
import PostViewList from "./pages/Post/PostViewList";
import CreatePost from "./pages/Post/create/CreatePost.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";


function App() {
  const { cookies, logout } = useAuth();
  const { setUser,user  } = useUser();

  async function getData() {
    try {
     
      if ( !user && cookies.token) {
        // console.log(cookies.token);
        let res = await apiService.getUser(cookies.token);

        setUser(res);
      }else{
        return
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
      <div className="h-screen w-full overflow-auto">
        {/* <AppRouter /> */}

        <Routes>
          <Route path={""} element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<AuthPage />} />
            {/* 👇 Only match when no other routes match*/}
            <Route path="*" element={<NotFoundPage />} />
        {/* ----------------------------------------------- */}
            <Route element={<ProtectedRoutes />}>

              <Route path="/posts" element={<PostViewList />} />
              <Route path="/posts/create" element={<CreatePost />} />
              <Route path="/posts/:id" element={<PostDetails />} />     
              <Route path="/posts/:id/edit" element={<PostEditView />} />     
              <Route path="/liked" element={<FavoritePost />} />
            </Route>
            {/*---------------------------------------------  */}
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
