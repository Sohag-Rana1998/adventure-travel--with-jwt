import { CardBody, CardHeader, Typography } from '@material-tailwind/react';
import PropTypes from 'prop-types';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { MdOutlineWatchLater } from 'react-icons/md';

const SingleTouristSpot = ({ spot }) => {
  const {
    _id,
    photo,
    spotName,
    CountryName,
    location,
    averageCost,

    travelTime,
  } = spot;
  return (
    <div className="w-full">
      <div className="w-full  h-full  rounded-2xl shadow-2xl  overflow-hidden">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 p-0 rounded-none"
        >
          <div className="relative">
            <img
              src={photo}
              className="w-full rounded-2xl  h-80 hover:scale-[110%] duration-700"
              alt="ui/ux review check"
            />

            <div className="absolute bottom-0 px-2  left-0 bg-black bg-opacity-50 p-2 rounded-tr-lg ">
              <Typography className="text-white flex items-center gap-2">
                {CountryName}
              </Typography>
            </div>
          </div>
        </CardHeader>
        <CardBody className="px-3 h-auto  m-0 ">
          <div className="flex  h-full md:h-[200px] flex-col justify-between">
            <Typography className="text-2xl font-bold">
              Enjoy The Beauty Of {spotName}
            </Typography>

            <div className="">
              <div>
                <div className="join">
                  <div className="w-32 py-2 border flex justify-center items-center gap-2 text-center bg-gray-100 rounded-l-xl ">
                    <MdOutlineWatchLater /> {travelTime} Days
                  </div>
                  <div className="w-auto border px-2 py-2 flex justify-center items-center gap-2 text-center bg-gray-100 rounded-r-xl ">
                    <FaLocationDot />
                    {location}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between md:items-center mt-3">
              <div className="mb-2 w-full md:w-auto text-lg p-2 text-white btn rounded-md bg-teal-900 font-bold ">
                ${averageCost}/Per Person
              </div>
              <Link to={`/view-details/${_id}`}>
                {' '}
                <div className="mb-2 w-full btn md:w-auto text-lg p-2 text-white rounded-md bg-[#88195f] font-bold ">
                  View Details
                </div>
              </Link>
            </div>
          </div>
        </CardBody>
      </div>
    </div>
  );
};

SingleTouristSpot.propTypes = {
  spot: PropTypes.object,
};

export default SingleTouristSpot;
