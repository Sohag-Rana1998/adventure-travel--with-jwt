import { Outlet, ScrollRestoration } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "../Components/Shared/Nav/Nav";
import Footer from "../Components/Shared/Footer/Footer";
import { useEffect, useState } from "react";

const Root = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(setLoading, 500, false);
  }, []);
  return loading ? (
    <div className="w-full min-h-screen flex justify-center items-center">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  ) : (
    <div className="">
      <div>
        <NavBar />
      </div>

      <div className="pt-32  px-3 md:px-0  w-full mx-auto">
        <Outlet />
      </div>

      <div>
        <Footer />
      </div>
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
