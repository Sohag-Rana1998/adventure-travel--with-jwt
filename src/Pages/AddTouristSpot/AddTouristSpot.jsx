import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet';
import { ScrollRestoration } from 'react-router-dom';

const AddTouristSpot = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user?.email || 'Not Found';
  const userName = user?.displayName;
  console.log(userEmail, userName);

  const handleAddSpot = e => {
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

    if (email == 'Not Found') {
      Swal.fire({
        icon: 'error',
        title: 'Please Log In With Your Valid Email Address And Try Again.',
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
      console.log(addTouristSpot);
      fetch('https://travel-zone-server-side.vercel.app/add-tourist-spot', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(addTouristSpot),
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          Swal.fire({
            icon: 'success',
            title: 'Tourist spot Added Successfully',
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        });
    }
  };

  return (
    <div className="gadgetContainer  my-10">
      <Helmet>
        <title>Adventure Travel | Add Tourist Spots</title>
      </Helmet>
      <div className="shadow-lg rounded-lg   p-5 md:p-8 border border-blue-400">
        {/* Heading */}
        <div className="mt-5 mb-8">
          <p className="text-center text-3xl font-semibold dark:text-white">
            Add Your Tourist Spot
          </p>
        </div>
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
            className="px-4 w-full py-2 mt-4 rounded hover:bg-[#ab3154]  bg-[#FF497C] duration-200 text-white cursor-pointer font-semibold"
            type="submit"
            value="Add Your Tourist Spot"
          />
        </form>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default AddTouristSpot;
