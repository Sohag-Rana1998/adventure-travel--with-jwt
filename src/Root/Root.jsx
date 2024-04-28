import { Outlet, ScrollRestoration } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavBar from '../Components/Shared/Nav/Nav';
import Footer from '../Components/Shared/Footer/Footer';

const Root = () => {
  return (
    <div className=" max-w-screen-2xl container  mx-auto">
      <div className="max-w-7xl px-3  container mx-auto">
        <NavBar></NavBar>
        <div className="pt-24">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
      <ToastContainer />
      <ScrollRestoration />
    </div>
  );
};

export default Root;
