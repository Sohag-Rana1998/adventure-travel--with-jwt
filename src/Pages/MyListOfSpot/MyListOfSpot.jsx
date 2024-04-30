import Swal from 'sweetalert2';
import axios from 'axios';
import { ScrollRestoration } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import useUserData from '../../Components/useHooks/useUsersData/useUserData';

import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const MyListOfSpot = () => {
  const { data, refetch, isLoading } = useUserData();
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const userName = user?.displayName;

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(setLoading, 500, false);
  }, []);

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://travel-zone-server-side.vercel.app/tourist-spot/${id}`
          )
          .then(data => {
            console.log(data);
            Swal.fire({
              title: 'Deleted!',
              text: 'User data has been deleted.',
              icon: 'success',
            });
            refetch();
          });
      }
    });
  };
  const [modalData, setModalData] = useState({});

  const handleUpdateSpot = e => {
    e.preventDefault();

    const id = modalData._id;
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
    console.log(UpdateTouristSpot);

    fetch(`https://travel-zone-server-side.vercel.app/tourist-spot/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(UpdateTouristSpot),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);

        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: 'success',
            title: 'Successfully Updated Your Tourist Spot Data',
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();

          form.reset();
        } else {
          Swal.fire({
            title:
              'Not updated. Please Make Some Changes On Your Data And Try Again.',
            showConfirmButton: true,
          });
        }
      });
  };

  return isLoading || loading ? (
    <div className="w-full min-h-screen flex justify-center items-center">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  ) : (
    <div className="max-w-7xl container mx-auto px-5 ">
      <Helmet>
        <title>Adventure Travel | My Tourist Spots List</title>
      </Helmet>
      <div>
        <div>
          {/* <div className="h-32 mb-10 md:h-40 bg-no-repeat bg-center bg-cover w-full rounded-xl flex items-center justify-center bg-[url(https://i.postimg.cc/qBNMdgtZ/rear-view-of-man-standing-on-mountain-vitor-marigo.jpg)] bg-opacity-50 ">
            <Slide>
              <h1 className="text-2xl md:text-4xl font-bold text-white">
                Your Tourist Spots List
              </h1>
            </Slide>
          </div> */}

          <div>
            <div className="text-center w-full px-0 md:px-32 mx-auto">
              <h4 className="text-4xl font-bold underline mb-5">
                Your Tourists Spot List
              </h4>
              <div className=" text-left">
                <h4 className="text xl font-bold"> User Name: {userName}</h4>
                <h4 className="text xl font-bold"> User Email: {email}</h4>
                <h4 className="text xl font-bold">
                  Total Tourists Spot : {data?.length}
                </h4>
              </div>
            </div>
          </div>
          <div className="divider w-full mb-10 px-0 md:px-32 "></div>

          <div className="px-0 md:px-32 ">
            {data && data?.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="table ">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>No:</th>
                      <th>Image</th>
                      <th>Name Of Spot</th>
                      <th>Country</th>
                      <th>Average Cost</th>
                      <th>Action1</th>
                      <th>Action2</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {data?.map((spot, index) => (
                      <tr key={spot._id} className="bg-base-200">
                        <th>{index + 1}</th>
                        <td className="w-32 h-24 ">
                          <img
                            src={spot?.photo}
                            className="w-full h-full rounded-lg"
                            alt=""
                          />
                        </td>
                        <td>{spot?.spotName}</td>
                        <td>{spot.CountryName}</td>
                        <td>${spot.averageCost}</td>

                        <td>
                          <label
                            onClick={() => setModalData(spot)}
                            htmlFor="my_modal_6"
                            className="btn bg-blue-gray-200"
                          >
                            Update
                          </label>
                        </td>
                        <td>
                          <button
                            onClick={() => handleDelete(spot._id)}
                            className="btn bg-blue-gray-200"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="table ">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>No:</th>
                      <th>Image</th>
                      <th>Name Of Spot</th>
                      <th>Country</th>
                      <th>Average Cost</th>
                      <th>Action1</th>
                      <th>Action2</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}

                    <tr className="bg-base-200">
                      <th></th>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>

                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-center mb-10 md:mb-40 text-3xl font-bold">
                  No Data Found
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal for update  */}
        <div className="w-full mx-auto">
          <input type="checkbox" id="my_modal_6" className="modal-toggle" />
          <div className="modal max-w-6xl" role="dialog">
            <div className="modal-box !max-w-5xl !max-h-[450px] right-0 absolute!">
              <div>
                <div>
                  <div className="mt-5 mb-8">
                    <p className="text-center text-3xl font-semibold dark:text-white">
                      Update Your Tourist Spot
                    </p>
                  </div>
                  {/* form */}
                  <div className="w-full">
                    <form onSubmit={handleUpdateSpot} className="w-full">
                      <div className="flex gap-8 ">
                        <div className="flex-1">
                          <label
                            className="block mb-2 dark:text-white"
                            htmlFor="photo"
                          >
                            Photo URL
                          </label>
                          <input
                            className="w-full p-2 border  rounded-md focus:outline-[#FF497C]"
                            type="text"
                            placeholder="Add Image URL"
                            id="photo"
                            name="photo"
                            defaultValue={modalData.photo}
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
                            defaultValue={modalData.CountryName}
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
                            defaultValue={modalData.description}
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
                            defaultValue={modalData.season}
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
                            type="text"
                            placeholder="Number of visitors per year"
                            id="visitor"
                            name="visitor"
                            defaultValue={modalData.visitor}
                            required
                          />
                        </div>
                        {/* Right side */}
                        <div className="flex-1">
                          <label
                            className="block mb-2 dark:text-white"
                            htmlFor="spot"
                          >
                            Name Of Tourist Spot
                          </label>
                          <input
                            className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                            type="text"
                            placeholder="Name Of Tourist Spot"
                            id="spot"
                            name="spot"
                            defaultValue={modalData.spotName}
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
                            defaultValue={modalData.location}
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
                            type="text"
                            placeholder="Average-cost"
                            id="averageCost"
                            name="averageCost"
                            defaultValue={modalData.averageCost}
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
                        type="text"
                        placeholder="Add Travel Time (e.g 3days / 7days)"
                        id="travelTime"
                        name="travelTime"
                        defaultValue={modalData.travelTime}
                        required
                      />
                      <button className="modal-action px-4 w-full py-2 mt-4 rounded hover:bg-[#ab3154]  bg-[#FF497C] duration-200 text-white cursor-pointer font-semibold">
                        <label htmlFor="my_modal_6" className="btn w-full">
                          Update Now
                        </label>
                      </button>
                      {/* <button className="">
                     
                    </button> */}
                    </form>
                    <div className="w-full flex justify-end mt-2">
                      <label htmlFor="my_modal_6" className="btn">
                        Cancel
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default MyListOfSpot;
