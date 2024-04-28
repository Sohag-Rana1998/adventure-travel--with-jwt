// import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleTouristSpot from '../AllTouristSpot/SingleTouristSpot';
import UseAllSpotData from '../../Components/useHooks/useAllSpotData/UseAllSpotData';
import { Helmet } from 'react-helmet';

const CountriesSpots = () => {
  const { CountryName } = useParams();
  const { data } = UseAllSpotData();
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    const newData = data?.filter(spot => spot.CountryName == CountryName);
    console.log(newData);
    setSpots(newData);
  }, [CountryName, data]);
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:5000/tourist-spot/${CountryName}`)
  //     .then(data => {
  //       setSpots(data.data);
  //     });
  // }, [CountryName]);
  // console.log(spots);

  return (
    <div>
      <Helmet>
        <title>Adventure Travel | Countries Tourist Spots</title>
      </Helmet>
      <div className="h-52 bg-no-repeat bg-center bg-cover w-full rounded-xl flex items-center justify-center bg-[url(https://i.postimg.cc/qBNMdgtZ/rear-view-of-man-standing-on-mountain-vitor-marigo.jpg)] bg-opacity-50 ">
        <h1 className="text-4xl font-bold text-white animate__animated animate__zoomIn animate__delay__1s">
          Explore The Unseen Of {CountryName}
        </h1>
      </div>
      <div className="grid grid-cols-1 my-10 md:grid-cols-2 lg:grid-cols-3  gap-5">
        {spots?.map(spot => (
          <SingleTouristSpot key={spot._id} spot={spot}></SingleTouristSpot>
        ))}
      </div>
    </div>
  );
};

export default CountriesSpots;
