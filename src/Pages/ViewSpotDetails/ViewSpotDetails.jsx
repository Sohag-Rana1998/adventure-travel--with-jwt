import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from '@material-tailwind/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaLocationDot } from 'react-icons/fa6';
import { ScrollRestoration, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ViewSpotDetails = () => {
  const { id } = useParams();
  const [spot, setSpot] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/tourist-spot/${id}`).then(data => {
      setSpot(data.data);
    });
  }, [id]);

  // Save to local storage:
  const savedSpots = JSON.parse(localStorage.getItem('spots') || '[]');

  const [places, setPlaces] = useState(savedSpots);

  const handleSavedSpot = spot => {
    console.log(spot);
    const isExist = places?.find(place => place._id == spot._id);
    if (!isExist) {
      setPlaces([...places, spot]);

      toast.success('Successfully Saved On Your Cart.');
    } else {
      toast.warn('Already Saved On Your Saved Cart.');
    }
  };
  console.log(places);

  useEffect(() => {
    localStorage.setItem('spots', JSON.stringify(places));
  }, [places]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(setLoading, 500, false);
  }, []);

  const {
    photo,
    spotName,
    CountryName,
    location,
    description,
    averageCost,
    season,
    travelTime,
    visitor,
  } = spot;

  return loading ? (
    <div className="w-full min-h-screen flex justify-center items-center">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  ) : (
    <div className="my-8 md:my-16">
      <Helmet>
        <title>RESIDENCE HUB | Details </title>
      </Helmet>

      <div className="h-[150px]  animate__animated animate__fadeInDown w-full rounded-xl bg-[url(https://i.ibb.co/PtcPs7P/6.jpg)] text-center mb-10  bg-no-repeat bg-center bg-opacity-10">
        <div className="h-[150px] w-full rounded-xl flex items-center justify-center bg-black bg-opacity-30">
          <h1 className="text-4xl font-bold text-white animate__animated animate__zoomIn animate__delay__1s">
            Details About The Spot
          </h1>
        </div>
      </div>
      <div>
        <Typography variant="h2">Spot Name: {spotName}</Typography>
        <Typography
          variant="lead"
          className=" font-lg text-lg flex items-center gap-2 mb-3"
        >
          <FaLocationDot />
          {location}
        </Typography>
      </div>
      <Card>
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 w-full p-0 rounded-none"
          >
            <div className="relative">
              <img
                src={photo}
                className="w-full rounded-2xl  h-96 hover:scale-[110%] duration-700"
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

          <CardBody className="flex w-full flex-col  justify-between h-auto  ">
            <div>
              <div>
                <Typography color="gray" className=" font-bold text-2xl">
                  Country: {CountryName}
                </Typography>
                <div className="flex flex-col md:flex-row justify-between ">
                  <div>
                    <h3 className=" text-2xl text-blue-600  font-bold ">
                      Average Cost: ${averageCost}/Per Person
                    </h3>
                    <div className="text-2xl text-blue-600  font-bold">
                      <span className="font-bold ">
                        Travel Time: {travelTime} Days
                      </span>
                      {}
                    </div>
                  </div>
                </div>

                <Typography
                  variant="lead"
                  color="gray"
                  className="text-lg mt-2"
                >
                  <span className="font-bold">Details About The Spot: </span>
                  {description}
                </Typography>
              </div>
            </div>
            <div>
              <Typography
                variant="lead"
                color="black"
                className="font-normal md:font-semibold flex  gap-2 "
              >
                <span className="font-bold">
                  Total Visitors Per Year: Aproximately {visitor}{' '}
                </span>
              </Typography>
              <Typography
                variant="lead"
                color="black"
                className="font-normal md:font-semibold flex  gap-2 "
              >
                <span className="font-bold">Best Season: {season} </span>
              </Typography>
            </div>
            <div className="flex flex-col md:flex-row justify-end  r mt-3">
              <Button
                onClick={() => handleSavedSpot(spot)}
                size="lg"
                className="bg-blue-600 w-full md:w-40 hover:bg-blue-gray-900"
              >
                Add to Cart
              </Button>
            </div>
          </CardBody>
        </div>
      </Card>
      <ScrollRestoration />
    </div>
  );
};

export default ViewSpotDetails;
