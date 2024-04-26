import { Button, Card, CardBody, Typography } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaLocationDot } from 'react-icons/fa6';
import { ScrollRestoration, useLoaderData, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../..//styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const ViewSpotDetails = () => {
  return   const { id } = useParams();
  const data = useLoaderData();
  const [estate, setEstate] = useState({});

  useEffect(() => {
    const singleData = data.find(property => property.id == id);

    setEstate(singleData);
  }, [id, data]);

  const savedHomes = JSON.parse(localStorage.getItem('homes') || '[]');

  const [Homes, setHomes] = useState(savedHomes);

  const handleSavedHomes = home => {
    const isExist = Homes.find(house => house.id === home.id);
    if (!isExist) {
      setHomes([...Homes, home]);

      toast.success('Successfully Saved On Your Saved List.');
    } else {
      toast.warn('Already Saved On Your Saved List.');
    }
  };
  console.log(Homes);

  useEffect(() => {
    localStorage.setItem('homes', JSON.stringify(Homes));
  }, [Homes]);

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const {
    estate_title,
    segment_name,
    price,
    status,
    area,
    location,
    facilities,
    image_url,
    image_url2,
    image_url3,
    description,
  } = estate;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(setLoading, 500, false);
  }, []);
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
            Property Details
          </h1>
        </div>
      </div>
      <div>
        <Typography variant="h2">{estate_title}</Typography>
        <Typography
          variant="lead"
          className=" font-lg text-lg flex items-center gap-2 mb-3"
        >
          <FaLocationDot />
          {location}
        </Typography>
      </div>
      <Card>
        <div className="rounded-xl">
          <div className=" relative mx-auto">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              onAutoplayTimeLeft={onAutoplayTimeLeft}
              className="mySwiper h-[500px]  rounded-2xl"
            >
              <SwiperSlide>
                {' '}
                <img
                  src={image_url}
                  alt="image 1"
                  className="h-full w-full object-fit"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={image_url2}
                  alt="image 2"
                  className="h-full w-full object-fit"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={image_url3}
                  alt="image 3"
                  className="h-full w-full object-fit"
                />
              </SwiperSlide>

              <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                  <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
              </div>
            </Swiper>
            <button className="px-10 py-4 rounded-tr-xl bg-blue-500 absolute z-10 right-0 top-0 text-white text-xl font-bold bg-opacity-80">
              {status}
            </button>
          </div>
        </div>
        <CardBody className="flex flex-col  justify-between h-auto  ">
          <div>
            <div>
              <div className="flex flex-col md:flex-row justify-between ">
                <Typography
                  variant="lead"
                  color="gray"
                  className=" font-bold text-2xl"
                >
                  #{segment_name}
                </Typography>
                <div>
                  <div>
                    <h3 className=" text-2xl text-blue-600  font-bold ">
                      Price: {price}
                    </h3>
                    <div className="text-2xl text-blue-600  font-bold">
                      <span className="font-bold ">Area: </span>
                      {area}
                    </div>
                  </div>
                </div>
              </div>

              <Typography variant="lead" color="gray" className="text-lg mt-2">
                <span className="font-bold">Details About This Property: </span>
                {description}
              </Typography>
            </div>
            <div className="flex flex-col  md:flex-row  justify-between gap-2 mt-2">
              <div className="w-full">
                <Typography
                  variant="lead"
                  color="black"
                  className="font-normal md:font-semibold flex  gap-2 "
                >
                  <span className="font-bold">Facilities: </span>
                  <div className="flex flex-col md:flex-row gap-2">
                    {facilities?.map((facility, indx) => (
                      <div key={indx}>
                        <span>{facility}, </span>
                      </div>
                    ))}
                    <span> etc....</span>
                  </div>
                </Typography>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-end  r mt-3">
            <Button
              onClick={() => handleSavedHomes(estate)}
              size="lg"
              className="bg-blue-600 w-full md:w-40 hover:bg-blue-gray-900"
            >
              Add To Cart
            </Button>
          </div>
        </CardBody>
      </Card>
      <ScrollRestoration />
    </div>
  );
};


export default ViewSpotDetails;
