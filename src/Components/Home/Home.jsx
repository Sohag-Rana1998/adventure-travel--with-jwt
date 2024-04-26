import UseCoffeeData from '../../UseCoffeeData/UseCoffeeData';

import FollowUs from './FollowUs';
import Banner from './Banner/Banner';

const Home = () => {
  const { isloading, coffeeData, reFetch } = UseCoffeeData();
  console.log(coffeeData);
  return (
    <div className="max-w-7xl container mx-auto">
      <div>
        <Banner></Banner>
      </div>
      {/* <CoffeeHouse
        coffees={coffeeData}
        isloading={isloading}
        reFetch={reFetch}
      ></CoffeeHouse> */}
      <FollowUs></FollowUs>
    </div>
  );
};

export default Home;
