// import axios from 'axios';
import { useEffect, useState } from 'react';
import { ScrollRestoration, useParams } from 'react-router-dom';
import SingleTouristSpot from '../AllTouristSpot/SingleTouristSpot';

import { Helmet } from 'react-helmet';
import axios from 'axios';

const CountriesSpots = () => {
  const { CountryName } = useParams();
  const [loading, setLoading] = useState(true);
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    setTimeout(setLoading, 1000, false);
    axios
      .get(`https://travel-zone-server-side.vercel.app/country/${CountryName}`)
      .then(data => {
        setSpots(data.data);
      });
  }, [CountryName]);

  return loading ? (
    <div className="w-full min-h-screen flex justify-center items-center">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  ) : (
    <div>
      <Helmet>
        <title>Adventure Travel | Countries Tourist Spots</title>
      </Helmet>
      <div className="h-32 mb-10 md:h-40 bg-no-repeat bg-center bg-cover w-full rounded-xl flex items-center justify-center bg-[url(https://i.postimg.cc/Y08m64hN/be.jpg)] bg-opacity-20">
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
