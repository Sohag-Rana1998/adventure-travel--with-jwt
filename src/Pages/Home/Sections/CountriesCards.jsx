import { Card, CardBody, CardHeader } from '@material-tailwind/react';
import UseCountryData from '../../../Components/useHooks/UseCountryData/UseCountryData';

const CountriesCards = () => {
  const { data } = UseCountryData();

  console.log(data);
  return (
    <div className="w-full mx-auto">
      <div className="text-center mb-5">
        <h3 className="text-xl font-bold underline underline-offset-4">
          EXPLORE A DIFFERENT WAY TO TRAVEL
        </h3>
        <h1 className="text-5xl font-bold"> Top destinations in South Asia</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {data?.map(country => (
          <div
            key={country._id}
            className="w-full h-auto btn p-0 px-0 hover:scale-[105%] hover:opacity-100 duration-700 opacity-80"
          >
            <Card className="w-full h-full ">
              <div className="relative">
                <img
                  src={country.image_url}
                  alt=""
                  className="w-full h-60 rounded-t-2xl "
                />
                <h3 className="text-2xl text-white bg-black px-2 py-1 w-auto bg-op absolute top-[50%] left-[40%] font-bold">
                  {' '}
                  {country.CountryName}
                </h3>
              </div>

              <CardBody className="">
                <div>
                  <p>{country.description}</p>
                </div>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountriesCards;
