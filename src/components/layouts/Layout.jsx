import { Outlet } from "react-router-dom";
import Nav from "../Navbar/Nav";
import Footer from "../Footer/Footer";
import { ToastContainer } from "react-toastify";

function Layout() {
  return (
    <>
      <section className="gradient min-h-screen w-full bg-[#f0f1ff]">
        <header>
          <Nav />
        </header>

        <main className=" mt-12">
          <Outlet />
        </main>

        <div className="mt-auto">
          <Footer />
        </div>

        <div>
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      </section>
    </>
  );
}

export default Layout;
