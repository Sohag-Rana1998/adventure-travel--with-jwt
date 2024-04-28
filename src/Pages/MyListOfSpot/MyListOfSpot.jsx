import { useEffect, useState } from 'react';

import Swal from 'sweetalert2';
import axios from 'axios';
import { Link, ScrollRestoration } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import useUserData from '../../Components/useHooks/useUsersData/useUserData';
import { Slide } from 'react-awesome-reveal';

const MyListOfSpot = () => {
  const { data, refetch, isLoading } = useUserData();

  const [myList, setMyList] = useState([]);

  useEffect(() => {
    setMyList(data);
    refetch();
  }, [data, refetch]);

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

  return isLoading ? (
    <div className="w-full min-h-screen flex justify-center items-center">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  ) : (
    <div className="max-w-7xl container mx-auto px-5 ">
      <Helmet>
        <title>Adventure Travel | My Tourist Spots List</title>
      </Helmet>
      <div>
        {myList && myList > 0 ? (
          <div>
            <div className="h-32 mb-10 md:h-40 bg-no-repeat bg-center bg-cover w-full rounded-xl flex items-center justify-center bg-[url(https://i.postimg.cc/qBNMdgtZ/rear-view-of-man-standing-on-mountain-vitor-marigo.jpg)] bg-opacity-50 ">
              <Slide>
                <h1 className="text-2xl md:text-4xl font-bold text-white">
                  Your Tourist Spots List
                </h1>
              </Slide>
            </div>

            <div className="px-0 md:px-32 ">
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
                    {myList?.map((spot, index) => (
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
                          <Link to={`/update-tourist-data/${spot._id}`}>
                            <button className="btn bg-blue-gray-200">
                              Update
                            </button>
                          </Link>
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
            </div>
            <ScrollRestoration />
          </div>
        ) : (
          <>
            <div className="w-full flex  flex-col gap-5 mt-10  justify-center items-center min-h-96 h-full">
              <h1 className="text-2xl text-center">
                Your List is empty. <br />
                You do not added any tourist spot yet. <br />
                To add your tourist spots please click on the button below.
              </h1>

              <Link to={'/add_tourist_spot'}>
                <button className="btn bg-blue-600">Add Tourist Spot</button>
              </Link>
            </div>
            <ScrollRestoration></ScrollRestoration>
          </>
        )}
      </div>
    </div>
  );
};

export default MyListOfSpot;
