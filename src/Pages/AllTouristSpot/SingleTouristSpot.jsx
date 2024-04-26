import { CardBody, CardHeader, Typography } from '@material-tailwind/react';
import PropTypes from 'prop-types';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const SingleTouristSpot = ({ spot }) => {
  console.log(spot);

  const {
    _id,
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

            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-2 rounded-t-lg ">
              <Typography className="text-white font-sm text-sm flex items-center gap-2">
                <FaLocationDot />
                {location}
              </Typography>
            </div>
          </div>
        </CardHeader>
        <CardBody className="px-3 h-auto  m-0 ">
          <div className="flex h-full flex-col justify-between">
            <Typography variant="h4">{spotName?.slice(0, 28)}</Typography>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
              <Typography variant="h5">{CountryName}</Typography>
              <Typography variant="h5">Best Season:{season}</Typography>
            </div>

            <div className="flex justify-between items-start md:items-center mt-3">
              <h3 className="mb-2 text-lg p-2 text-white rounded-md bg-teal-900 font-bold ">
                About ${averageCost}
              </h3>
              <Link to={`/view-detail/${_id}`}>
                <button className="bg-blue-600 btn mb-2  hover:scale-[110%] duration-500  md:w-auto text-white font-bold hover:bg-blue-gray-900">
                  View Property
                </button>
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
