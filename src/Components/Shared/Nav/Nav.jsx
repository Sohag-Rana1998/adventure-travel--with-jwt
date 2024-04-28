import { Avatar } from '@material-tailwind/react';
import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const localTheme = localStorage.getItem('theme');
    document.querySelector('html').setAttribute('data-theme', localTheme);
  }, [theme]);

  const handleToggle = e => {
    if (e.target.checked) {
      setTheme('synthwave');
    } else {
      setTheme('light');
    }
  };

  const handleLogout = () => {
    logOut();
    console.log(user);
  };

  const themeButton = (
    <>
      <label className="cursor-pointer grid place-items-center">
        <input
          onChange={handleToggle}
          type="checkbox"
          value="synthwave"
          className="toggle theme-controller h-8 w-20 bg-orange-500 row-start-1 col-start-1 col-span-2"
        />
        <svg
          className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>
        <svg
          className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </label>
    </>
  );

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
          to="/all-tourist-spot"
          className={({ isActive, isPending }) =>
            isActive
              ? 'border-2 font-bold text-[#d7816e] border-[#FF9843]'
              : isPending
              ? 'pending'
              : ''
          }
        >
          All Tourist Spot
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add_tourist_spot"
          className={({ isActive, isPending }) =>
            isActive
              ? 'border-2 font-bold text-[#d7816e] border-[#FF9843]'
              : isPending
              ? 'pending'
              : ''
          }
        >
          Add Tourist Spot
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-tourist-spot-list"
          className={({ isActive, isPending }) =>
            isActive
              ? 'border-2 font-bold text-[#d7816e] border-[#FF9843]'
              : isPending
              ? 'pending'
              : ''
          }
        >
          My List
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
                  </div>
                ) : (
                  <div>
                    <Link to={'/login'}>
                      <button className="btn w-40 btn-bg mr-3 text-white">
                        Log In
                      </button>
                    </Link>
                    <Link to={'/register'}>
                      <button className="btn w-40 btn-bg mr-3 text-white">
                        Register
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </ul>
        </div>
        <div className="flex justify-between items-center gap-3">
          <Link to={'/'}>
            <button className="btn btn-ghost  w-52 text-xl font-bold text-blue-600">
              Adventure Travel
            </button>
          </Link>
          <div className="block md:hidden">{themeButton}</div>
        </div>
      </div>
      <div className="navbar-center hidden  lg:flex">
        <ul className="menu menu-horizontal px-1"> {Links}</ul>
      </div>

      <div className="navbar-end hidden md:flex lg:flex">
        <div className="flex  ">
          {user ? (
            <div className="flex gap-3 justify-between items-center">
              {themeButton}
              <nav className="relative parent ">
                <ul>
                  <li>
                    <Avatar
                      src={
                        (user && user?.photoURL) ||
                        'https://i.ibb.co/zmbRY07/images.png'
                      }
                      className="mr-4 cursor-pointer bg-no-repeat bg-cover bg-[url(https://i.ibb.co/zmbRY07/images.png)]"
                    />
                    <ul className="dropDown">
                      <div className="w-auto dropdownMenu duration-500   z-10  py-3 px-5   ">
                        <div>
                          <h2 className="w-full hover:bg-blue-500 bg-gray-500 text-white font-bold text-xl p-2 rounded-md mb-2">
                            {user?.displayName || ''}
                          </h2>
                          <button
                            onClick={handleLogout}
                            className="btn hover:bg-blue-500 bg-gray-500   mr-3 text-white"
                          >
                            Log Out
                          </button>
                        </div>
                      </div>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              {themeButton}
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
