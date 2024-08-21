import { useEffect, useState } from "react";

import { ScrollRestoration, useParams } from "react-router-dom";

import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

import useAuth from "../../Components/useHooks/useAuth/useAuth";
import useAxiosSecure from "../../Components/useHooks/useAxiosSecure/useAxiosSecure";

const UpdateTouristData = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth;
  const email = user?.email;
  const userName = user?.displayName;
  // console.log(email, userName);
  const { id } = useParams();
  const [spot, setSpot] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosSecure.get(`/tourist-spot/${id}`).then((data) => {
      setSpot(data.data);
    });
    setTimeout(setLoading, 500, false);
  }, [id, axiosSecure]);

  const {
    photo,
    spotName,
    CountryName,
    location,
    description,
    averageCost,
    season,
    travelTime,
    visitor,
  } = spot;

  const handleUpdateSpot = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const photo = form.photo.value;
    const spotName = form.spot.value;
    const CountryName = form.countryName.value;
    const location = form.location.value;
    const description = form.description.value;
    const averageCost = parseFloat(form.averageCost.value);
    const season = form.seasonality.value;
    const travelTime = form.travelTime.value;
    const visitor = form.visitor.value;
    console.log(averageCost);
    const id = spot._id;
    const UpdateTouristSpot = {
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
    // console.log(UpdateTouristSpot);

    fetch(`https://adventure-travel-server.vercel.app/tourist-spot/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdateTouristSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);

        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Successfully Updated Your Tourist Spot Data",
            showConfirmButton: false,
            timer: 1500,
          });
          setTimeout(setLoading, 500, false);
          form.reset();
        } else {
          Swal.fire({
            title: "Please Make Some Changes To Update Your Tourists Spot Data",
            showConfirmButton: true,
          });
        }
      });
  };

  return loading ? (
    <div className="w-full min-h-screen flex justify-center items-center">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  ) : (
    <div className="gadgetContainer  my-10">
      <Helmet>
        <title>Adventure Travel | Update Tourist Spots</title>
      </Helmet>
      <div className="shadow-lg rounded-lg   p-5 md:p-8 border border-blue-400">
        {/* Heading */}
        <div className="mt-5 mb-8">
          <p className="text-center text-3xl font-semibold dark:text-white">
            Update Your Tourist Spot
          </p>
        </div>
        {/* form */}
        <form onSubmit={handleUpdateSpot}>
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
                defaultValue={photo}
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
                defaultValue={CountryName}
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
                defaultValue={description}
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
                defaultValue={season}
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
                defaultValue={visitor}
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
                defaultValue={spotName}
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
                defaultValue={location}
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
                defaultValue={averageCost}
                required
              />
            </div>
          </div>
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
            defaultValue={travelTime}
            required
          />

          <input
            className="px-4 w-full py-2 mt-4 rounded hover:bg-[#ab3154]  bg-[#FF497C] duration-200 text-white cursor-pointer font-semibold"
            type="submit"
            value="Update Data"
          />
        </form>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default UpdateTouristData;
