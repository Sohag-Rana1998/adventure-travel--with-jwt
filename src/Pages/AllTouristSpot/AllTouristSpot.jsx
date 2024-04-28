import { useEffect, useState } from 'react';
import UseAllSpotData from '../../Components/useHooks/useAllSpotData/UseAllSpotData';
import SingleTouristSpot from './SingleTouristSpot';
import { IoIosArrowDropdown } from 'react-icons/io';
import { Helmet } from 'react-helmet';
const AllTouristSpot = () => {
  const { data } = UseAllSpotData();
  const [displayData, setDisplayData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setDisplayData(data);
    setTimeout(setLoading, 500, false);
  }, [data]);

  const handleShort1 = () => {
    setLoading(true);
    const shortData = displayData.sort((a, b) =>
      parseInt(a.averageCost) > parseInt(b.averageCost) ? 1 : -1
    );
    setTimeout(setLoading, 500, false);
    setDisplayData(shortData);

    console.log(shortData);
  };
  const handleShort2 = () => {
    setLoading(true);
    const shortData2 = displayData.sort((a, b) =>
      parseInt(a.averageCost) > parseInt(b.averageCost) ? -1 : 1
    );
    setTimeout(setLoading, 500, false);
    setDisplayData(shortData2);
    console.log(shortData2);
  };

  return loading ? (
    <div className="w-full min-h-screen flex justify-center items-center">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  ) : (
    <div>
      <Helmet>
        <title>Adventure Travel | All Tourist Spots</title>
      </Helmet>
      <div className="text-center ">
        <h3 className="text-xl font-bold underline underline-offset-4">
          MODERN & BEAUTIFUL
        </h3>
        <h1 className="text-5xl font-bold">Our Most Popular Adventures</h1>
      </div>
      <div className="w-full flex justify-end mb-5">
        <div className="mr-4 w-52 md:mr-10">
          <div className="dropdown dropdown-bottom">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 flex border-2 border-blue-500 bg-blue-500 items-center font-bold gap-3 "
            >
              Short By Cost <IoIosArrowDropdown className="text-xl" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li onClick={handleShort1}>
                <a>Lower Cost to Higher</a>
              </li>
              <li onClick={handleShort2}>
                <a>Higher Cost to Lower</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {displayData?.map(spot => (
          <SingleTouristSpot key={spot._id} spot={spot}></SingleTouristSpot>
        ))}
      </div>
    </div>
  );
};

export default AllTouristSpot;
