import { useEffect, useState } from "react";
import Swal from "sweetalert2";

import { Helmet } from "react-helmet";
import { ScrollRestoration } from "react-router-dom";
import useAuth from "../../Components/useHooks/useAuth/useAuth";

const AddTouristSpot = () => {
  const { user } = useAuth();
  const userEmail = user?.email || "Not Found";
  const userName = user?.displayName;
  // console.log(userEmail, userName);

  const handleAddSpot = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const spotName = form.spot.value;
    const CountryName = form.countryName.value;
    const location = form.location.value;
    const description = form.description.value;
    const averageCost = form.averageCost.value;
    const season = form.seasonality.value;
    const travelTime = form.travelTime.value;
    const visitor = form.visitor.value;
    const userName = form.userName.value;
    const email = form.email.value;

    if (email == "Not Found") {
      Swal.fire({
        icon: "error",
        title:
          "Email Address Not Found ! Please Log In With Your Valid Email Address And Try Again.",
        showConfirmButton: true,
      });
    } else {
      const addTouristSpot = {
        photo,
        spotName,
        CountryName,
        location,
        description,
        averageCost,
        season,
        travelTime,
        visitor,
        userName,
        email,
      };
      // console.log(addTouristSpot);
      fetch("https://adventure-travel-server.vercel.app/add-tourist-spot", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addTouristSpot),
      })
        .then((res) => res.json())
        .then(() => {
          // console.log(data);
          Swal.fire({
            icon: "success",
            title: "Tourist spot Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        });
    }
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
    <div className="">
      <Helmet>
        <title>Adventure Travel | Add Tourist Spots</title>
      </Helmet>
      <div className="w-full text-center relative text-white bg-[url(https://i.postimg.cc/MpQKC7DZ/page-title.jpg)] bg-no-repeat bg-cover bg-center  py-14">
        <div className="bg-black bg-opacity-40 inset-0 absolute"></div>
        <h2 className="text-4xl font-semibold relative z-10">
          {" "}
          Add A Tourist Spot
        </h2>
      </div>
      <div className="max-w-7xl w-full mx-auto mt-5">
        <div className="shadow-lg rounded-lg   p-5 md:p-8 border border-blue-400">
          {/* form */}
          <form onSubmit={handleAddSpot}>
            <div className="flex gap-8 ">
              <div className="flex-1">
                <label className="block mb-2 dark:text-white" htmlFor="photo">
                  Photo URL
                </label>
                <input
                  className="w-full p-2 border  rounded-md focus:outline-[#FF497C]"
                  type="text"
                  placeholder="Add Image URL"
                  id="photo"
                  name="photo"
                  required
                />

                <label
                  className="block mb-2 mt-4 dark:text-white"
                  htmlFor="countryName"
                >
                  Country Name
                </label>
                <input
                  className="w-full p-2  border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  placeholder=" Country Name"
                  id="countryName"
                  name="countryName"
                  required
                />
                <label
                  className="block mt-4 mb-2 dark:text-white"
                  htmlFor="description"
                >
                  Short Description
                </label>
                <input
                  className="w-full p-2  border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  placeholder="Enter short description"
                  id="description"
                  name="description"
                  required
                />
                <label
                  className="block mt-4 mb-2 dark:text-white"
                  htmlFor="seasonality"
                >
                  Seasonality Of Tour
                </label>
                <input
                  className="w-full p-2  border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  placeholder="Add Season Name "
                  id="seasonality"
                  name="seasonality"
                  required
                />
                <label
                  className="block mt-4 mb-2 dark:text-white"
                  htmlFor="visitor"
                >
                  Visitors-Per-Year
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="number"
                  placeholder="Number of visitors per year"
                  id="visitor"
                  name="visitor"
                  required
                />
              </div>
              {/* Right side */}
              <div className="flex-1">
                <label className="block mb-2 dark:text-white" htmlFor="spot">
                  Name Of Tourist Spot
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  placeholder="Name Of Tourist Spot"
                  id="spot"
                  name="spot"
                  required
                />
                <label
                  className="block mb-2 mt-4 dark:text-white"
                  htmlFor="location"
                >
                  Location
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  placeholder="Enter Spot Location"
                  id="location"
                  name="location"
                  required
                />

                <label
                  className="block mt-4 mb-2 dark:text-white"
                  htmlFor="averageCost"
                >
                  Average Cost
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="number"
                  placeholder="Average-cost"
                  id="averageCost"
                  name="averageCost"
                  required
                />
                <label
                  className="block mt-4 mb-2 dark:text-white"
                  htmlFor="travelTime"
                >
                  Travel Time
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="number"
                  placeholder="Add Travel Time (e.g 3days / 7days)"
                  id="travelTime"
                  name="travelTime"
                  required
                />
                <label
                  className="block mt-4 mb-2 dark:text-white"
                  htmlFor="userName"
                >
                  User Name
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  placeholder="User Name"
                  id="userName"
                  name="userName"
                  disabled
                  defaultValue={userName}
                />
              </div>
            </div>
            <label className="block mt-4 mb-2 dark:text-white" htmlFor="email">
              User Email (You cannot change your user email here)
            </label>
            <input
              className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
              type="email"
              placeholder="User Email"
              id="email"
              name="email"
              value={userEmail}
              disabled
            />

            <input
              className="px-4 w-full py-2 mt-4 rounded hover:bg-gray-900  bg-[#0766AD] duration-200 text-white cursor-pointer font-semibold"
              type="submit"
              value="Add Your Tourist Spot"
            />
          </form>
        </div>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default AddTouristSpot;
