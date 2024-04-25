import { Avatar } from '@material-tailwind/react';
import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [type, setType] = useState(false);
  const handleHover = () => {
    setType(true);
  };
  const handleLeave = () => {
    setType(false);
  };
  const handleLogout = () => {
    logOut();
    console.log(user);
  };

  const Links = (
    <div className="flex flex-col   lg:flex-row gap-2">
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive
              ? 'border-2 font-bold text-[#d7816e] border-[#FF9843]'
              : isPending
              ? 'pending'
              : ''
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/contact-us"
          className={({ isActive, isPending }) =>
            isActive
              ? 'border-2 font-bold text-[#d7816e] border-[#FF9843]'
              : isPending
              ? 'pending'
              : ''
          }
        >
          Contact Us
        </NavLink>
      </li>
    </div>
  );

  return (
    <div className="navbar max-w-7xl fixed z-30 container pt-2 mx-auto  bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {Links}
            <div className="navbar-end mt-2 ">
              <div className=" ">
                {user ? (
                  <div className="">
                    <Avatar
                      title={user?.displayName || ''}
                      src={
                        (user && user?.photoURL) ||
                        'https://i.ibb.co/zmbRY07/images.png'
                      }
                      className="mr-4 cursor-pointer bg-no-repeat bg-cover bg-[url(https://i.ibb.co/zmbRY07/images.png)]"
                    />
                    <button
                      onClick={handleLogout}
                      className="btn bg-blue-600 hover:bg-blue-gray-900   mr-3 text-white w-full"
                    >
                      Log Out
                    </button>
                    {type ? (
                      <div className="w-auto bg-black bg-opacity-40 z-10 absolute py-4 px-5 rounded-2xl top-16 right-16 ">
                        <div>
                          <h2 className="w-full text-white font-bold text-xl">
                            {user?.displayName || ''}
                          </h2>
                        </div>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                ) : (
                  <div>
                    <Link to={'/login'}>
                      <button className="btn btn-bg mr-3 text-white">
                        Log In
                      </button>
                    </Link>
                    <Link to={'/register'}>
                      <button className="btn btn-bg mr-3 text-white">
                        Register
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </ul>
        </div>
        <Link to={'/'}>
          <button className="btn btn-ghost  w-52 text-xl font-bold text-blue-600">
            Travel Zone
          </button>
        </Link>
      </div>
      <div className="navbar-center hidden  lg:flex">
        <ul className="menu menu-horizontal px-1"> {Links}</ul>
      </div>

      <div className="navbar-end hidden md:flex lg:flex">
        <div className="flex  ">
          {user ? (
            <div className="flex justify-between items-center">
              <Avatar
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
                src={
                  (user && user?.photoURL) ||
                  'https://i.ibb.co/zmbRY07/images.png'
                }
                className="mr-4 cursor-pointer bg-no-repeat bg-cover bg-[url(https://i.ibb.co/zmbRY07/images.png)]"
              />
              <button
                onClick={handleLogout}
                className="btn bg-blue-600 hover:bg-blue-gray-900   mr-3 text-white"
              >
                Log Out
              </button>
              {type ? (
                <div className="w-auto bg-black bg-opacity-40 z-10 absolute py-3 px-5 rounded-2xl top-16 right-20 ">
                  <div>
                    <h2 className="w-full text-white font-bold text-xl">
                      {user?.displayName || ''}
                    </h2>
                  </div>
                </div>
              ) : (
                ''
              )}
            </div>
          ) : (
            <div>
              <Link to={'/login'}>
                <button className="btn btn-bg mr-3 text-white">Log In</button>
              </Link>
              <Link to={'/register'}>
                <button className="btn btn-bg mr-3 text-white">Register</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
