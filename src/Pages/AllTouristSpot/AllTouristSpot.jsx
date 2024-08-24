import { useEffect, useState } from "react";
import UseAllSpotData from "../../Components/useHooks/useAllSpotData/UseAllSpotData";
import SingleTouristSpot from "./SingleTouristSpot";
import { IoIosArrowDropdown } from "react-icons/io";
import { Helmet } from "react-helmet";
import { ScrollRestoration } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";
const AllTouristSpot = () => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState("");
  const { data, isLoading, refetch } = UseAllSpotData(
    itemsPerPage,
    currentPage,
    sort
  );

  // console.log(data);

  const [loading, setLoading] = useState(false);
  const page = data?.totalPages;
  const count = data?.count;
  const pageArray = [...Array(page).keys()].map((element) => element + 1);

  useEffect(() => {
    setLoading(true);
    refetch();
    setTimeout(setLoading, 1000, false);
  }, [currentPage, sort]);

  const handleShort1 = () => {
    setLoading(true);
    setSort("asc");
    setTimeout(setLoading, 1000, false);

    // console.log(shortData);
  };
  const handleShort2 = () => {
    setLoading(true);
    setSort("desc");
    setTimeout(setLoading, 1000, false);

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

  const handlePrevPage = () => {
    setLoading(true);
    setCurrentPage(currentPage - 1);
    setTimeout(setLoading, 1000, false);
  };
  const handleNextPage = () => {
    setLoading(true);

    setCurrentPage(currentPage + 1);
    setTimeout(setLoading, 1000, false);
  };
  const handleSeeAll = () => {
    setLoader(true);
    setSearch("");
    setBrand("");
    setCategory("");
    setMaxPrice(0);
    setMinPrice(0);
    setSortOrder("");
    setTimeout(setLoader, 1000, false);
  };

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
                  <a className="text-black">Lower Cost to Higher</a>
                </li>
                <li onClick={handleShort2}>
                  <a className="text-black">Higher Cost to Lower</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl w-full mx-auto my-10">
        <div>
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full ">
              {data?.result &&
                data?.result?.map((spot) => (
                  <SingleTouristSpot
                    key={spot._id}
                    spot={spot}
                  ></SingleTouristSpot>
                ))}
            </div>
            <div>
              {count > 6 ? (
                <div className="flex justify-center items-center text-white my-5 bg-blue-500 rounded-xl p-3">
                  <div className="flex">
                    <a
                      onClick={handlePrevPage}
                      className={
                        currentPage == 1
                          ? " hidden"
                          : "px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md  dark:bg-gray-80 cursor-pointer hover:bg-blue-500 hover:text-white"
                      }
                    >
                      <div className="flex items-center -mx-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 mx-1 rtl:-scale-x-100"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 16l-4-4m0 0l4-4m-4 4h18"
                          />
                        </svg>

                        <span className="mx-1">Previous Page</span>
                      </div>
                    </a>

                    {pageArray?.map((page) => (
                      <button
                        onClick={() => {
                          setCurrentPage(page);
                          setLoading(true);
                          setTimeout(setLoading, 1000, false);
                        }}
                        key={page}
                        className={
                          currentPage == page
                            ? "px-4 py-2 hidden md:block mx-1 transition-colors duration-300 transform bg-gray-500 rounded-md sm:inline    hover:bg-blue-500   hover:text-white  "
                            : "px-4 py-2 hidden md:block mx-1 text-gray-700 transition-colors  duration-300 transform bg-white rounded-md sm:inline hover:bg-blue-500  hover:text-white  "
                        }
                      >
                        {page}
                      </button>
                    ))}

                    <a
                      className={
                        currentPage == pageArray.length
                          ? "hidden"
                          : "px-4 py-2 mx-1  text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
                      }
                      onClick={handleNextPage}
                    >
                      <div className="flex items-center cursor-pointer -mx-1">
                        <span className="mx-1">Next Page</span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 mx-1 rtl:-scale-x-100"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="w-full flex flex-col justify-center mt-5">
                    {data?.result && data?.result.length === 0 ? (
                      <h3 className="text-center text-3xl font-bold my-10">
                        {" "}
                        No Result Found
                      </h3>
                    ) : (
                      <></>
                    )}
                    <div className="w-full flex  justify-center">
                      <button
                        onClick={handleSeeAll}
                        className="btn w-[40] bg-blue-500 text-white text-right mb-5"
                      >
                        See All
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default AllTouristSpot;
