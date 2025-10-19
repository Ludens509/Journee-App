import { Route, Routes } from "react-router-dom";
import Layout from "../Components/Layouts/layout";
import PostDetails from "../pages/Post/PostDetails";
import PostViewList from "../pages/Post/PostViewList";
import FavoritePost from "../pages/Like/FavoritePost";
import Home from "../pages/Home";
import AuthPage from "../pages/AuthPage/AuthPage";
import ProtectedRoutes from "../components/ProtectedRoutes";

const AppRouter = () => {
  return (
    <>
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
    </>
  );
};

export default AppRouter;
