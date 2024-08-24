import { Button } from "@material-tailwind/react";
import UseAllSpotData from "../../../Components/useHooks/useAllSpotData/UseAllSpotData";
import SingleTouristSpot from "../../AllTouristSpot/SingleTouristSpot";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

const TouristSpot = () => {
  const { data } = UseAllSpotData();

  return (
    <div className="mt-10">
      <div className="text-center mb-5">
        <Slide cascade>
          <h3 className="text-xl font-bold underline underline-offset-4">
            MODERN & BEAUTIFUL
          </h3>
          <h1 className="text-5xl font-bold">Our Most Popular Adventures</h1>
        </Slide>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {data?.result?.slice(0, 8)?.map((spot) => (
          <SingleTouristSpot key={spot._id} spot={spot}></SingleTouristSpot>
        ))}
      </div>
      <div className="w-full flex justify-center">
        <Link to={"/all-tourist-spot"}>
          {" "}
          <Button
            size="lg"
            className="bg-blue-500 text-white hover:bg-gray-900 my-5"
          >
            Explore More
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TouristSpot;
