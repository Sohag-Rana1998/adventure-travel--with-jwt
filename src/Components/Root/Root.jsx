import { Outlet } from 'react-router-dom';

import Footer from '../Footer/Footer';
import { ToastContainer } from 'react-toastify';
import NavBar from '../Nav/Nav';

const Root = () => {
  return (
    <div className=" max-w-screen-2xl container  mx-auto">
      <NavBar></NavBar>
      <div className="max-w-7xl pt-16 container mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default Root;
