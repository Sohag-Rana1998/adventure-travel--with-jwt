import { useEffect, useState } from "react";
import Banner from "./Sections/Banner";
import CountriesCards from "./Sections/CountriesCards";
import Testimonials from "./Sections/Testimonials";
import TouristSpot from "./Sections/TouristSpot";
import WhyChooseUs from "./Sections/WhyChooseUs";

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(setLoading, 700, false);
  }, []);
  return loading ? (
    <div className="w-full min-h-screen flex justify-center items-center">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  ) : (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div className="max-w-7xl container mx-auto">
        <WhyChooseUs></WhyChooseUs>
        <TouristSpot></TouristSpot>
        <CountriesCards></CountriesCards>
        <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default Home;
