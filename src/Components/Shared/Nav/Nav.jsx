import { Avatar } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CgLogIn } from "react-icons/cg";
import { IoLogOutOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import useAuth from "../../useHooks/useAuth/useAuth";
import NavTop from "./NavTop";
import { FaUser } from "react-icons/fa6";

const NavBar = () => {
  const localTheme = localStorage.getItem("theme");
  const { user, logOut } = useAuth();
  const [theme, setTheme] = useState(localTheme);
  const [type, setType] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    setTimeout(setLoading, 500, false);
  }, []);
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    if (localTheme == "synthwave") {
      setType(true);
    } else {
      setType(false);
    }
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = (e) => {
    setType(!type);
    console.log(type);
    if (e.target.checked) {
      setTheme("synthwave");
    } else {
      setTheme("light");
    }
  };

  const handleLogout = () => {
    logOut()
      .then((result) => {
        console.log(result);
        Swal.fire({
          icon: "success",
          title: "Log Out successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error(error.message);
      });
    // console.log(user);
  };

  const themeButton = (
    <>
      <label className="cursor-pointer grid place-items-center">
        <input
          onChange={handleToggle}
          type="checkbox"
          value="synthwave"
          className="toggle theme-controller h-7 w-14 bg-orange-500 row-start-1 col-start-1 col-span-2"
          checked={type}
        />
        <svg
          className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
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
              ? "border-2 font-bold  border-[#0766AD]"
              : isPending
              ? "pending"
              : ""
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
              ? "border-2 font-bold  border-[#0766AD]"
              : isPending
              ? "pending"
              : ""
          }
        >
          All Tourists Spot
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add_tourist_spot"
          className={({ isActive, isPending }) =>
            isActive
              ? "border-2 font-bold  border-[#0766AD]"
              : isPending
              ? "pending"
              : ""
          }
        >
          Add Tourists Spot
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-tourist-spot-list"
          className={({ isActive, isPending }) =>
            isActive
              ? "border-2 font-bold  border-[#0766AD]"
              : isPending
              ? "pending"
              : ""
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
              ? "border-2 font-bold  border-[#0766AD]"
              : isPending
              ? "pending"
              : ""
          }
        >
          Contact Us
        </NavLink>
      </li>
    </div>
  );

  return loading ? (
    <div className="w-full"></div>
  ) : (
    <div className="w-full ">
      <div className={`hidden md:block`}>
        <NavTop />
      </div>
      <div
        className={`w-full fixed z-50    duration-500 ${
          isScrolled
            ? "top-0 !bg-[#061A3A] text-white "
            : "bg-white top-0  md:top-14"
        } ${type ? "!bg-[#061A3A] text-white" : "bg-white text-black"}`}
      >
        <div className="navbar m-0 max-w-7xl container  mx-auto p-0 ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                className={`menu menu-sm ${
                  type ? "!bg-[#061A3A] text-white" : "bg-white text-black"
                } dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40`}
              >
                {Links}
                <div className="navbar-end mt-2 ">
                  <div className=" ">
                    {user ? (
                      <div className="">
                        <Avatar
                          title={user?.displayName || ""}
                          src={
                            (user && user?.photoURL) ||
                            "https://i.ibb.co/zmbRY07/images.png"
                          }
                          className="mr-4 mb-2 cursor-pointer bg-no-repeat bg-cover bg-[url(https://i.ibb.co/zmbRY07/images.png)]"
                        />

                        <button
                          onClick={handleLogout}
                          className="btn w-32  bg-blue-600 hover:bg-blue-gray-900   text-white"
                        >
                          Log Out
                        </button>
                      </div>
                    ) : (
                      <div>
                        <Link to={"/login"}>
                          <button className="btn w-32 btn-bg mr-3 text-white border-none focus:outline-none">
                            <CgLogIn /> Log In
                          </button>
                        </Link>
                        <Link to={"/register"}>
                          <button className="btn w-32 btn-bg text-white border-none focus:outline-none">
                            Register
                          </button>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </ul>
            </div>
            <div className="flex w-full  items-center gap-2">
              <Link to={"/"}>
                <img
                  src="https://i.postimg.cc/0y4sGf8c/logo.png"
                  alt="LOGO"
                  className="h-16 w-16"
                />
              </Link>
              <h3 className="text-2xl font-bold hidden lg:block">
                Adventure Travel
              </h3>
            </div>
          </div>
          <div className="flex md:hidden justify-end items-center w-full mx-5">
            <div className="block md:hidden ">{themeButton}</div>
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
                    <ul className="flex items-start gap-2">
                      <li>
                        <Avatar
                          src={
                            (user && user?.photoURL) ||
                            "https://i.ibb.co/zmbRY07/images.png"
                          }
                          className="mr-4 cursor-pointer bg-no-repeat bg-cover bg-[url(https://i.ibb.co/zmbRY07/images.png)]"
                        />
                        <ul className="dropDown">
                          <div className="w-auto dropdownMenu duration-500   z-10  py-3 px-5   ">
                            <div className="flex flex-col justify-end">
                              <h2 className="w-full bg-blue-500 hover:bg-gray-900 text-white font-semibold text-lg p-2 rounded-md mb-2">
                                {user?.displayName || ""}
                              </h2>
                              <button
                                onClick={handleLogout}
                                className="btn bg-blue-500 flex items-center gap-2 hover:bg-gray-900  text-white"
                              >
                                Log Out <IoLogOutOutline />
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
                  <Link to={"/login"}>
                    <button className="btn w-32 btn-bg mr-3 text-white border-none focus:outline-none">
                      <CgLogIn /> Log In
                    </button>
                  </Link>
                  <Link to={"/register"}>
                    <button className="btn w-32 btn-bg mr-3 text-white border-none focus:outline-none">
                      <FaUser /> Register
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
