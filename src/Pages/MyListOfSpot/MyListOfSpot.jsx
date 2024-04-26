import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

import UseAllSpotData from '../../useAllSpotData/UseAllSpotData';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MyListOfSpot = () => {
  const { data, isLoading, refetch } = UseAllSpotData();
  const { user } = useContext(AuthContext);
  const [myList, setMyList] = useState([]);
  const email = user?.email;

  useEffect(() => {
    const userData = data?.filter(spot => spot.email == email);
    console.log(userData);
    setMyList(userData);
  }, [data, email]);

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
    <div className="max-w-7xl container mx-auto px-5 md:px-32 ">
      <div className="overflow-x-auto">
        <table className="table">
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
                <td className="w-24 h-24 ">
                  <img
                    src={spot?.photo}
                    className="w-full h-full rounded-lg"
                    alt=""
                  />
                </td>
                <td>{spot?.spotName}</td>
                <td>{spot.CountryName}</td>
                <td>{spot.averageCost}</td>

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
    </div>
  );
};

export default MyListOfSpot;
