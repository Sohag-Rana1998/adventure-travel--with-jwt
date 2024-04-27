import Banner from './Sections/Banner';
import CountriesCards from './Sections/CountriesCards';
import Testimonials from './Sections/Testimonials';
import TouristSpot from './Sections/TouristSpot';
import WhyChooseUs from './Sections/WhyChooseUs';

const Home = () => {
  return (
    <div className="max-w-7xl container mx-auto">
      <div>
        <Banner></Banner>
        <WhyChooseUs></WhyChooseUs>
        <TouristSpot></TouristSpot>
        <CountriesCards></CountriesCards>
        <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default Home;
