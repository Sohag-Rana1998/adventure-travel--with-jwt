import { Link, ScrollRestoration, useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { Button } from "@material-tailwind/react";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAuth from "../../Components/useHooks/useAuth/useAuth";
import axios from "axios";

const Register = () => {
  const [type, setType] = useState(false);
  const {
    createUserByEmailAndPassword,
    signInWithGithub,
    signInWithGoogle,
    // emailVerify,
    handleUpdateProfile,
  } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.photo.files[0];
    const email = e.target.email.value;
    const password = e.target.password.value;
    const formData = new FormData();
    formData.append("image", image);

    if (!/[A-Z]/.test(password)) {
      toast.warn("Your Password Should Have One Uppercase Letter.");
      return;
    } else if (!/[a-z]/.test(password)) {
      toast.warn("Your Password Should Have One Lowercase Letter.");
      return;
    } else if (password.length < 6) {
      toast.warn("Password Must Be Minimum 06 Character.");
      return;
    }
    // console.log(name, email, photo, password);
    try {
      const { data } = await axios.post(
        "https://api.imgbb.com/1/upload?&key=2de4c1f472c4c211f51f4b495b3bea1d",
        formData
      );
      const photo = data.data.display_url;
      const result = await createUserByEmailAndPassword(email, password);
      console.log(result);
      if (result?.user) {
        // emailVerify(result?.user)
        handleUpdateProfile(name, photo);
        navigate("/");
      }

      Swal.fire({
        icon: "success",
        title: "Congratulation! Your account is registered successfully",
        showConfirmButton: false,
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: err.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const navigate = useNavigate();
  // console.log(navigate);
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        // console.log(result.user);
        navigate("/");
        Swal.fire({
          icon: "success",
          title: "Log In successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Something went wrong. Please try again.",
          showConfirmButton: true,
        });
      });
  };
  const handleGithubLogin = () => {
    signInWithGithub()
      .then(() => {
        // console.log(result.user);
        navigate("/");

        Swal.fire({
          icon: "success",
          title: "Log In successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Something went wrong. Please try again.",
          showConfirmButton: true,
        });
      });
  };

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(setLoading, 500, false);
  }, []);
  return loading ? (
    <div className="w-full min-h-screen flex justify-center items-center">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  ) : (
    <div className="flex flex-col justify-between items-center mb-10">
      <Helmet>
        <title>Adventure Travel | Register</title>
      </Helmet>
      <div className="flex flex-col  max-w-lg w-full p-5 md:p-16 rounded-md   border-2  shadow-xl border-purple-200 ">
        <div className="mb-4 text-center">
          <h1 className="my-3 text-4xl font-bold">Register Now</h1>
          <p className="text-sm ">Register to access all of our features...</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 font-bold text-sm">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Your Name"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 "
              />
            </div>
            <div>
              <label htmlFor="name" className="block mb-2 font-bold text-sm">
                Your Photo URL
              </label>
              <input
                type="file"
                name="photo"
                id="photo"
                accept="photo/*"
                // placeholder="Your Photo URL"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 "
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-bold text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                required
                id="email"
                placeholder="Email address"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />{" "}
            </div>
            <div>
              <div className="mb-2">
                <label htmlFor="password" className="text-sm font-bold">
                  Password
                </label>
              </div>
              <div className="relative">
                <input
                  type={type ? "text" : "password"}
                  name="password"
                  id="password"
                  required
                  placeholder="password"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                />
                <span
                  className="absolute right-5 top-2 "
                  onClick={() => setType(!type)}
                >
                  {type ? (
                    <IoEye className="text-2xl" />
                  ) : (
                    <IoEyeOff className="text-2xl" />
                  )}
                </span>{" "}
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <input
                type="submit"
                value="Register"
                className="w-full px-8 py-3 font-semibold cursor-pointer rounded-md bg-blue-600 text-gray-50"
              />
            </div>
            <p className="px-6 text-sm text-center ">
              Already have an account yet?
              <Link to={"/login"}>
                {" "}
                <button className="hover:underline cursor-pointer font-bold text-xl text-blue-600">
                  Log In
                </button>
              </Link>
            </p>
          </div>
        </form>
        <div className="flex justify-around items-center ">
          <div className="divider divider-primary   w-full"></div>
          <h2>OR</h2>
          <div className="divider divider-primary  w-full"></div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Button
            onClick={handleGoogleLogin}
            size="lg"
            variant="outlined"
            color="light-blue"
            className="flex items-center gap-3 w-full"
          >
            <img
              src="https://docs.material-tailwind.com/icons/google.svg"
              alt="metamask"
              className="h-6 w-6"
            />
            Continue with Google
          </Button>
          <Button
            onClick={handleGithubLogin}
            size="lg"
            variant="gradient"
            color="light-blue"
            className="group relative flex w-full py-4 items-center gap-3 overflow-hidden pr-[72px]"
          >
            CONTINUE with Github
            <span className="absolute right-0 grid h-full w-12 place-items-center bg-light-blue-600 transition-colors group-hover:bg-light-blue-700">
              <FaGithub className="text-4xl" />
            </span>
          </Button>
        </div>
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
      ></ToastContainer>
      <ScrollRestoration />
    </div>
  );
};

export default Register;
