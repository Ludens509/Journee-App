import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "../components/ProtectedRoutes.jsx";
import Layout from "../components/layouts/Layout.jsx";
import AuthPage from "../pages/AuthPage/AuthPage";
import Home from "../pages/Home";
import FavoritePost from "../pages/Like/FavoritePost";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import PostDetails from "../pages/Post/PostDetails";
import PostEditView from "../pages/Post/PostEditView.jsx";
import PostViewList from "../pages/Post/PostViewList";
import CreatePost from "../pages/Post/create/CreatePost.jsx";

const AppRouter = () => {
  return (
    <>
      <div className="h-screen w-full overflow-auto">
        <Routes>
          <Route path={""} element={<Layout />}>
            <Route
              index
              element={
                  <Home />
              }
            />
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
};

export default AppRouter;
