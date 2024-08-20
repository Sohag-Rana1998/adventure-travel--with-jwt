import { useEffect, useState } from "react";
import UseAllSpotData from "../../Components/useHooks/useAllSpotData/UseAllSpotData";
import SingleTouristSpot from "./SingleTouristSpot";
import { IoIosArrowDropdown } from "react-icons/io";
import { Helmet } from "react-helmet";
import { ScrollRestoration } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";
const AllTouristSpot = () => {
  const { data, isLoading } = UseAllSpotData();
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

    // console.log(shortData);
  };
  const handleShort2 = () => {
    setLoading(true);
    const shortData2 = displayData.sort((a, b) =>
      parseInt(a.averageCost) > parseInt(b.averageCost) ? -1 : 1
    );
    setTimeout(setLoading, 500, false);
    setDisplayData(shortData2);
    // console.log(shortData2);
  };

  const [text] = useTypewriter({
    words: ["MODERN & BEAUTIFUL"],
    loop: 1,
  });
  const [text2] = useTypewriter({
    words: ["Our Most Popular Adventures Here"],
    loop: 1,
    typeSpeed: 50,
    deleteSpeed: 50,
  });

  return isLoading || loading ? (
    <div className="w-full min-h-screen flex justify-center items-center">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  ) : (
    <div>
      <Helmet>
        <title>Adventure Travel | All Tourist Spots</title>
      </Helmet>
      <div className="w-full text-center relative text-white bg-[url(https://i.postimg.cc/MpQKC7DZ/page-title.jpg)] bg-no-repeat bg-cover bg-center pt-14 pb-10">
        <div className="bg-black bg-opacity-40 inset-0 absolute"></div>
        <h3 className="text-xl relative z-10 font-bold underline underline-offset-4">
          {text}
        </h3>
        <h1 className="text-4xl relative z-10 font-bold">{text2}</h1>
        <div className="flex justify-end max-w-7xl mx-auto">
          <div className="w-52">
            <div className="dropdown dropdown-bottom">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 text-white flex border-2 border-blue-500 bg-blue-500 items-center font-bold gap-3 "
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
      </div>
      <div className="max-w-7xl w-full mx-auto mt-5">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayData?.map((spot) => (
            <SingleTouristSpot key={spot._id} spot={spot}></SingleTouristSpot>
          ))}
        </div>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default AllTouristSpot;
