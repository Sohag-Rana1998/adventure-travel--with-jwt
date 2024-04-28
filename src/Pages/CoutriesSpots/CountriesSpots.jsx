// import axios from 'axios';
import { useEffect, useState } from 'react';
import { ScrollRestoration, useParams } from 'react-router-dom';
import SingleTouristSpot from '../AllTouristSpot/SingleTouristSpot';

import { Helmet } from 'react-helmet';
import axios from 'axios';

const CountriesSpots = () => {
  const { CountryName } = useParams();

  const [spots, setSpots] = useState([]);

  useEffect(() => {
    axios
      .get(`https://travel-zone-server-side.vercel.app/country/${CountryName}`)
      .then(data => {
        setSpots(data.data);
      });
  }, [CountryName]);
  console.log(spots);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(setLoading, 1000, false);
  }, []);
  return loading ? (
    <div className="w-full min-h-screen flex justify-center items-center">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  ) : (
    <div>
      <Helmet>
        <title>Adventure Travel | Countries Tourist Spots</title>
      </Helmet>
      <div className="h-52 bg-no-repeat bg-center bg-cover w-full rounded-xl flex items-center justify-center bg-[url(https://i.postimg.cc/qBNMdgtZ/rear-view-of-man-standing-on-mountain-vitor-marigo.jpg)] bg-opacity-50 ">
        <h1 className="text-4xl font-bold text-white text-center">
          Explore The Unseen Of {CountryName}
        </h1>
      </div>
      <div className="grid grid-cols-1 my-10 md:grid-cols-2 lg:grid-cols-3  gap-5">
        {spots?.map(spot => (
          <SingleTouristSpot key={spot._id} spot={spot}></SingleTouristSpot>
        ))}
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default CountriesSpots;
