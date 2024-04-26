import UseAllSpotData from '../../useUsersData/useAllSpotData/UseAllSpotData';
import SingleTouristSpot from './SingleTouristSpot';

const AllTouristSpot = () => {
  const { data } = UseAllSpotData();
  console.log(data);
  return (
    <div>
      {/* <div>
        <label className="block mt-4 mb-2 dark:text-white" htmlFor="brand">
          Brand Name
        </label>
        <select
          name="brand"
          id="brand"
          className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
          type="text"
          placeholder="Select Brand"
        >
          <option value="Test" selected>
            Test
          </option>
          <option value="Test2" selected>
            Test2
          </option>
          <option value="Test3" selected>
            Test3
          </option>
        </select>
      </div> */}
      This All tourist spot page............
      {data?.map(spot => (
        <SingleTouristSpot key={spot._id} spot={spot}></SingleTouristSpot>
      ))}
    </div>
  );
};

export default AllTouristSpot;
