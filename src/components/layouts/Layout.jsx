import { Outlet } from "react-router-dom";
import Nav from "../Navbar/Nav";


function Layout() {
  return (
    <>
    <section className="gradient min-h-screen w-full bg-[#f0f1ff]">

       <header ><Nav/></header>
      <main className=" mt-12"><Outlet /></main>
    </section>
     
    </>
  );
}

export default Layout;
