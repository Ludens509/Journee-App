
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from '../Components/Layouts/layout';
import PostDetails from "../pages/Post/PostDetails";
import PostViewList from "../pages/Post/PostViewList";
import FavoritePost from '../pages/Like/FavoritePost';
import Home from "../pages/Home";


const Approuter = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path={''} element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/posts/:id" element={<PostDetails/>}/>
          <Route path="/posts" element={<PostViewList/>}/>
          <Route path="/liked" element={<FavoritePost/>} />
        </Route>
        
      </Routes>
    </Router>
    </>
  )
}

export default Approuter;