import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "../Components/Shared/Nav/Nav";
import Footer from "../Components/Shared/Footer/Footer";
import { useEffect, useState } from "react";

const Root = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const noNavbar = location.pathname.includes("/verify-email");
  useEffect(() => {
    setTimeout(setLoading, 500, false);
  }, []);
  return loading ? (
    <div className="w-full min-h-screen flex justify-center items-center">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  ) : (
    <div className="">
      <div>{noNavbar ? <></> : <NavBar />}</div>

      <div className="pt-16 w-full mx-auto">
        <Outlet />
      </div>

      <div>{noNavbar ? <></> : <Footer />}</div>
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ScrollRestoration />
    </div>
  );
};

export default Root;
