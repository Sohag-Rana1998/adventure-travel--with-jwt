import {
  Button,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdOutlineWatchLater } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";

const SingleTouristSpot = ({ spot }) => {
  const {
    _id,
    photo,
    spotName,
    CountryName,
    location,
    averageCost,
    season,
    visitor,
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
              className="w-full rounded-t-2xl  h-72 hover:scale-[110%] duration-700"
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
            <div>
              <Typography className="text-2xl ">
                Enjoy The Beauty Of {spotName}
              </Typography>
              <Typography className="text-xl flex items-center gap-2">
                <FaLocationDot />
                {location}
              </Typography>

              <div className="flex flex-col md:flex-row items-start justify-between md:items-center">
                <Typography className="  ">
                  <span className="text-blue-500 text-xl font-bold">
                    ${averageCost}
                  </span>
                  /Per Person
                </Typography>
                <div className="w-full lg:w-32 py-2 border flex justify-center items-center gap-2 text-center bg-black/10  rounded-xl ">
                  <MdOutlineWatchLater /> {travelTime} Days
                </div>
              </div>
            </div>

            <div className="w-full flex justify-end  mt-3">
              <Link to={`/view-details/${_id}`}>
                {" "}
                <Button
                  size="lg"
                  className="w-full md:w-40 text-white  hover:bg-gray-900 bg-blue-500"
                >
                  View Details
                </Button>
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
