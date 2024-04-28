import { useEffect, useState } from 'react';

import Swal from 'sweetalert2';
import axios from 'axios';
import { Link, ScrollRestoration } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import useUserData from '../../Components/useHooks/useUsersData/useUserData';

const MyListOfSpot = () => {
  const { data, refetch } = useUserData();

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
        axios.delete(`http://localhost:5000/tourist-spot/${id}`).then(data => {
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

  return (
    <div className="max-w-7xl my-10 container mx-auto px-5 md:px-32 ">
      <Helmet>
        <title>Adventure Travel | My Tourist Spots List</title>
      </Helmet>
      <div className="text-center my-7">
        <h1 className="text-5xl font-bold">My Tourist Spots List</h1>
      </div>

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
                    <button className="btn bg-blue-gray-200">Update</button>
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
      <ScrollRestoration />
    </div>
  );
};

export default MyListOfSpot;
